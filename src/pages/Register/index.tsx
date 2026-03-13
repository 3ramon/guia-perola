import NavBar from "../../components/Navbar";
import React, { useState } from "react";
import { Estabelecimento } from "../../types";
import { useCreateEstabelecimento } from "../../hooks/useCreateEstabelecimento";
import { useNavigation } from "../../hooks/useNavigation";

export default function Register() {
    //configurar o state de as funcoes handle, peguei um exemplo basico de formulario para preencher
    const [formData, setFormData] = useState<Omit<Estabelecimento, "id">>({
        nome: "",
        categoria: "",
        subcategoria: "",
        avaliacao: 0,
        qtdAvaliacao: undefined,
        contato: { telefone: "", email: "" },
        endereco: { rua: "", bairro: "", referencia: "" },
        imagem: "",
    });

    const { handleNavigation } = useNavigation();

    const { create, loading } = useCreateEstabelecimento();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { name, value } = e.target;

        // campos aninhados
        if (name.startsWith("contato.")) {
            const field = name.split(".")[1];
            setFormData({
                ...formData,
                contato: { ...formData.contato, [field]: value },
            });
        } else if (name.startsWith("endereco.")) {
            const field = name.split(".")[1];
            setFormData({
                ...formData,
                endereco: { ...formData.endereco, [field]: value },
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Estabelecimento cadastrado:", formData);
        alert("Estabelecimento cadastrado com sucesso!");
        create(formData);
    };

    return (
        <>
            <NavBar />
            <form onSubmit={handleSubmit}>
                <h4>Estabelecimento</h4>
                <input
                    name="nome"
                    placeholder="Nome"
                    value={formData.nome}
                    onChange={handleChange}
                />
                <input
                    name="categoria"
                    placeholder="Categoria"
                    value={formData.categoria}
                    onChange={handleChange}
                />
                <input
                    name="subcategoria"
                    placeholder="Subcategoria"
                    value={formData.subcategoria}
                    onChange={handleChange}
                />
                <input
                    name="avaliacao"
                    type="number"
                    placeholder="Avaliação"
                    value={formData.avaliacao}
                    onChange={handleChange}
                />
                <input
                    name="qtdAvaliacao"
                    type="number"
                    placeholder="Qtd Avaliações"
                    value={formData.qtdAvaliacao || ""}
                    onChange={handleChange}
                />

                <h4>Contato</h4>
                <input
                    name="contato.telefone"
                    placeholder="Telefone"
                    value={formData.contato.telefone}
                    onChange={handleChange}
                />
                <input
                    name="contato.email"
                    placeholder="Email"
                    value={formData.contato.email}
                    onChange={handleChange}
                />

                <h4>Endereço</h4>
                <input
                    name="endereco.rua"
                    placeholder="Rua"
                    value={formData.endereco.rua}
                    onChange={handleChange}
                />
                <input
                    name="endereco.bairro"
                    placeholder="Bairro"
                    value={formData.endereco.bairro}
                    onChange={handleChange}
                />
                <input
                    name="endereco.referencia"
                    placeholder="Referencia"
                    value={formData.endereco.referencia}
                    onChange={handleChange}
                />

                <input
                    name="imagem"
                    placeholder="URL da Imagem"
                    value={formData.imagem}
                    onChange={handleChange}
                />

                <button type="submit">Cadastrar</button>
            </form>
            {loading ? (
                <div>Caregando</div>
            ) : (
                <p>
                    Cadastro concluido, vá para a tela de Estabelecimentos!
                    <button onClick={() => handleNavigation("Places")}>
                        Estabelecimentos
                    </button>
                </p>
            )}
        </>
    );
}
