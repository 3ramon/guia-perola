import React, { useState, FormEvent } from "react";
import { Estabelecimento } from "../../types";
import { useCreateEstabelecimento } from "../../hooks/useCreateEstabelecimento";
import { useNavigation } from "../../hooks/useNavigation";
import { uploadImagem } from "../../services/storageService";
import { useCategorias } from "../../hooks/useCategorias";

import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";

export default function Register() {
    const { categorias } = useCategorias();

    const navigate = useNavigate();
    const [submitting, setSubmitting] = useState(false);
    const [toastMsg, setToastMsg] = useState<string | null>(null);
    const [imagemFile, setImagemFile] = useState<File | undefined>(undefined);
    const [file, setFile] = useState<File | null>(null);

    const { create, isLoading, error, success } = useCreateEstabelecimento();
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);
        try {
            await create(
                {
                    nome: formData.get("nome") as string,
                    categoria: formData.get("categoria") as string,
                    subcategoria: formData.get("subcategoria") as string,
                    avaliacao: 5.0,
                    qtdAvaliacao: 15,
                    contato: {
                        telefone: formData.get("contato.telefone") as string,
                        email: formData.get("contato.email") as string,
                        website: formData.get("contato.website") as string,
                        instagram: formData.get("contato.instagram") as string,
                    },
                    endereco: {
                        rua: formData.get("endereco.rua") as string,
                        bairro: formData.get("endereco.bairro") as string,
                        referencia: formData.get(
                            "endereco.referencia",
                        ) as string,
                    },
                },
                imagemFile,
            );
            console.log(
                {
                    nome: formData.get("nome") as string,
                    categoria: formData.get("categoria") as string,
                    subcategoria: formData.get("subcategoria") as string,
                    avaliacao: 5.0,
                    qtdAvaliacao: 15,
                    contato: {
                        telefone: formData.get("contato.telefone") as string,
                        email: formData.get("contato.email") as string,
                        website: formData.get("contato.website") as string,
                        instagram: formData.get("contato.instagram") as string,
                    },
                    endereco: {
                        rua: formData.get("endereco.rua") as string,
                        bairro: formData.get("endereco.bairro") as string,
                        referencia: formData.get(
                            "endereco.referencia",
                        ) as string,
                    },
                },
                imagemFile,
                "tudo",
            );
        } catch (error) {
            alert("Erro ao cadastrar");
        }

        setTimeout(() => {
            setToastMsg(
                "Estabelecimento cadastrado! Em breve aparecerá na lista.",
            );
            setSubmitting(false);
            setTimeout(() => navigate("/"), 1200);
        }, 800);
    }

    const categories = categorias.filter((c) => c !== "All");

    return (
        <main className={styles.page}>
            <h1 className={styles.title}>Cadastre um novo estabelecimento</h1>
            <p className={styles.subtitle}>
                Preencha os detalhes abaixo para adicionar uma empresa ou
                estabelecimento local.
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.field}>
                    <label htmlFor="nome" className={styles.label}>
                        Nome *
                    </label>
                    <input
                        name="nome"
                        id="nome"
                        className={styles.input}
                        required
                        maxLength={50}
                        placeholder="Supermercado Extra"
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="categoria" className={styles.label}>
                        Categoria *
                    </label>
                    <select
                        name="categoria"
                        id="categoria"
                        className={styles.select}
                        required
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Selecione a categoria
                        </option>
                        {categories.map((c) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={styles.field}>
                    <label htmlFor="subcategoria" className={styles.label}>
                        Subcategoria *
                    </label>
                    <input
                        name="subcategoria"
                        id="subcategoria"
                        className={styles.input}
                        required
                        maxLength={30}
                        placeholder="Supermercado"
                    />
                </div>

                <p className={styles.subtitle}>Endereço</p>

                <div className={styles.field}>
                    <label htmlFor="rua" className={styles.label}>
                        Rua *
                    </label>
                    <input
                        name="endereco.rua"
                        id="rua"
                        className={styles.input}
                        required
                        maxLength={200}
                        placeholder="Rua perola, 1234"
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="bairro" className={styles.label}>
                        Bairro *
                    </label>
                    <input
                        name="endereco.bairro"
                        id="bairro"
                        className={styles.input}
                        required
                        maxLength={200}
                        placeholder="Centro"
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="referencia" className={styles.label}>
                        Ponto de referência *
                    </label>
                    <input
                        name="endereco.referencia"
                        id="referencia"
                        className={styles.input}
                        required
                        maxLength={200}
                        placeholder="Próximo a lotérica"
                    />
                </div>

                <p className={styles.subtitle}>Contato</p>

                <div className={styles.row}>
                    <div className={styles.field}>
                        <label htmlFor="telefone" className={styles.label}>
                            Telefone *
                        </label>
                        <input
                            name="contato.telefone"
                            id="telefone"
                            className={styles.input}
                            required
                            type="tel"
                            maxLength={20}
                            placeholder="(00) 00000-0000"
                        />
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="email" className={styles.label}>
                            Email *
                        </label>
                        <input
                            name="contato.email"
                            id="email"
                            className={styles.input}
                            type="email"
                            maxLength={100}
                            placeholder="contact@example.com"
                        />
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="website" className={styles.label}>
                            Website *
                        </label>
                        <input
                            name="contato.website"
                            id="website"
                            className={styles.input}
                            type="text"
                            maxLength={100}
                            placeholder="www.sitedomercado.com"
                        />
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="instagram" className={styles.label}>
                            Instagram *
                        </label>
                        <input
                            name="contato.instagram"
                            id="instagram"
                            className={styles.input}
                            type="text"
                            maxLength={100}
                            placeholder="@mercado"
                        />
                    </div>
                </div>

                <div className={styles.field}>
                    <label htmlFor="image" className={styles.label}>
                        Imagem / Logo (opcional)
                    </label>
                    <input
                        id="image"
                        className={styles.input}
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                            setImagemFile(e.target.files?.[0] ?? undefined)
                        }
                    />
                </div>

                <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={submitting}
                >
                    {submitting
                        ? "Cadastrando..."
                        : "Estabelecimento Cadastrado"}
                </button>
            </form>

            {toastMsg && (
                <div className="toast-container">
                    <div className="toast">
                        <h4>Success!</h4>
                        <p>{toastMsg}</p>
                    </div>
                </div>
            )}
        </main>
    );
}
