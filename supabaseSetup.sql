create extension if not exists "pgcrypto";

create table categorias (
  id uuid primary key default gen_random_uuid(),
  nome text unique not null,
  created_at timestamptz default now()
);

create table estabelecimentos (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  categoria text not null references categorias(nome),
  subcategoria text not null,
  avaliacao numeric(2,1) not null default 0 check (avaliacao >= 0 and avaliacao <= 5),
  qtd_avaliacao integer default 0,
  contato jsonb not null default "{}",
  endereco jsonb not null default "{}",
  imagem_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

CREATE INDEX idx_estabelecimentos_categoria ON estabelecimentos(categoria);

insert into categorias (nome) values
('Gastronomia'),
('Saude'),
('Cultura');

insert into estabelecimentos (
  nome,
  categoria,
  subcategoria,
  avaliacao,
  qtd_avaliacao,
  contato,
  endereco,
  imagem_url
) values (
  'Marrom Café',
  'Gastronomia',
  'Cafeteria',
  4.8,
  29,
  '{"telefone": "(11) 98765-4321", "email": "contato@marromcafe.com.br", "website": "https://marromcafe.com.br"}',
  '{"rua": "Alameda dos Bits, 1024", "bairro": "Vila Mariana", "referencia": "Centro"}',
  null
);

-- Habilitar RLS nas tabelas
ALTER TABLE categorias ENABLE ROW LEVEL SECURITY;
ALTER TABLE estabelecimentos ENABLE ROW LEVEL SECURITY;

-- Leitura publica (qualquer um pode ver)
CREATE POLICY "Leitura publica categorias" ON categorias
    FOR SELECT USING (true);

CREATE POLICY "Leitura publica estabelecimentos" ON estabelecimentos
    FOR SELECT USING (true);

-- Insercao publica (para o formulario de cadastro)
CREATE POLICY "Insercao publica estabelecimentos" ON estabelecimentos
    FOR INSERT WITH CHECK (true);

-- CREATE POLICY "Dono pode editar" ON estabelecimentos
--     FOR UPDATE USING (auth.uid() = user_id);
--                    ^^^^^^^^^^^^^^^^^^^^^^^^
--                    "so se o usuario logado for o dono desta linha"    