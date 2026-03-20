import NavBar from "../../components/Navbar";
import React, { useState, FormEvent } from "react";
import { Estabelecimento } from "../../types";
import {  useCreateEstabelecimento } from "../../hooks/useCreateEstabelecimentoV1";
import { useNavigation } from "../../hooks/useNavigation";
import { uploadImagem } from "../../services/storageService";
import { useCategorias } from "../../hooks/useCategorias";

export default function Register() {
    const {categorias} = useCategorias();
    const { create, isLoading, error, success } = useCreateEstabelecimento();
    const [imagemFile, setImagemFile] = useState<File | undefined>(undefined);

    // //configurar o state de as funcoes handle, peguei um exemplo basico de formulario para preencher
    // const [formData, setFormData] = useState<Omit<Estabelecimento, "id">>({
    //     nome: "",
    //     categoria: "",
    //     subcategoria: "",
    //     avaliacao: 0,
    //     qtdAvaliacao: undefined,
    //     contato: { telefone: "", email: "" },
    //     endereco: { rua: "", bairro: "", referencia: "" },
    //     imagem: "",
    // });
    // const [file, setFile] = useState<File | null>(null);
    // const [submitedd, setSubmitedd] = useState<boolean>(false);
    // const { handleNavigation } = useNavigation();

    // const handleChange = (
    //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    // ) => {
    //     const { name, value } = e.target;

    //     // campos aninhados
    //     if (name.startsWith("contato.")) {
    //         const field = name.split(".")[1];
    //         setFormData({
    //             ...formData,
    //             contato: { ...formData.contato, [field]: value },
    //         });
    //     } else if (name.startsWith("endereco.")) {
    //         const field = name.split(".")[1];
    //         setFormData({
    //             ...formData,
    //             endereco: { ...formData.endereco, [field]: value },
    //         });
    //     } else {
    //         setFormData({ ...formData, [name]: value });
    //     }
    // };

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);


        await create(
            {
                nome: formData.get("nome") as string,
                categoria: formData.get("categoria") as string,
                subcategoria: formData.get("subcategoria") as string,
                avaliacao: Number(formData.get("avaliacao")),
                qtdAvaliacao: Number(formData.get("qtdAvaliacao")),
                contato: {
                    telefone: formData.get("contato.telefone") as string,
                    email: formData.get("contato.email") as string,
                    website: formData.get("contato.website") as string,
                    instagram: formData.get("contato.instagram") as string,
                },
                endereco: {
                    rua: formData.get("endereco.rua") as string,
                    bairro: formData.get("endereco.bairro") as string,
                    referencia: formData.get("endereco.referencia") as string,
                },
            },
            imagemFile,

        );

        if(!error) {
            form.reset();
            setImagemFile(undefined);
        }

        // let imagemUrl = formData.imagem;
        // if (file) {
        //     imagemUrl = await uploadImagem(file);
        // }
        // const payload = {
        //     ...formData,
        //     imagem: imagemUrl,
        // };

        // try {
        //     await create(payload);
        //     setSubmitedd(true);
        // } catch (error) {
        //     alert("Erro ao cadastrar");
        // }
    }

    return (
        <>
            <NavBar />
                <div className="register__container">
                <h1>Cadastrar Estabelecimento</h1>

                {success && (
                    <p className="form__message--success">
                        Estabelecimento cadastrado com sucesso!
                    </p>
                )}
                {error && <p className="form__message--error">Erro: {error}</p>}

                <form className="register__form" onSubmit={handleSubmit}>
                    <div className="form__section">
                        <h3>Informacoes Gerais</h3>
                        <div className="form__group">
                            <label htmlFor="nome">Nome do Estabelecimento *</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                required
                            />
                        </div>

                        <div className="form__row">
                            <div className="form__group">
                                <label htmlFor="categoria">Categoria *</label>
                                <select id="categoria" name="categoria" required>
                                    <option value="">Selecione...</option>
                                    {categorias.map((cat) => (
                                        <option key={cat} value={cat}>
                                            {cat}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form__group">
                                <label htmlFor="subcategoria">Subcategoria *</label>
                                <input
                                    type="text"
                                    id="subcategoria"
                                    name="subcategoria"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form__group">
                            <label htmlFor="imagem">Imagem</label>
                            <input
                                type="file"
                                id="imagem"
                                name="imagem"
                                accept="image/*"
                                onChange={(e) =>
                                    setImagemFile(e.target.files?.[0] ?? undefined)
                                }
                            />
                        </div>
                    </div>

                    <div className="form__section">
                        <h3>Contato</h3>
                        <div className="form__group">
                            <label htmlFor="telefone">Telefone *</label>
                            <input
                                type="tel"
                                id="telefone"
                                name="telefone"
                                required
                            />
                        </div>

                        <div className="form__row">
                            <div className="form__group">
                                <label htmlFor="email">E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                />
                            </div>

                            <div className="form__group">
                                <label htmlFor="website">Website</label>
                                <input
                                    type="url"
                                    id="website"
                                    name="website"
                                />
                            </div>
                        </div>

                        <div className="form__group">
                            <label htmlFor="instagram">Instagram</label>
                            <input
                                type="text"
                                id="instagram"
                                name="instagram"
                                placeholder="@usuario"
                            />
                        </div>
                    </div>

                    <div className="form__section">
                        <h3>Endereco</h3>
                        <div className="form__group">
                            <label htmlFor="rua">Rua *</label>
                            <input
                                type="text"
                                id="rua"
                                name="rua"
                                required
                            />
                        </div>

                        <div className="form__row">
                            <div className="form__group">
                                <label htmlFor="bairro">Bairro *</label>
                                <input
                                    type="text"
                                    id="bairro"
                                    name="bairro"
                                    required
                                />
                            </div>

                            <div className="form__group">
                                <label htmlFor="referencia">Referencia *</label>
                                <input
                                    type="text"
                                    id="referencia"
                                    name="referencia"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="form__submit"
                        disabled={isLoading}
                    >
                        {isLoading ? "Cadastrando..." : "Cadastrar Estabelecimento"}
                    </button>
                </form>
            </div>
        </>
    );
}
