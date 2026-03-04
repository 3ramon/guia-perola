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
  subcategoria text,
  avaliacao numeric(2,1),
  qtd_avaliacao integer default 0,
  contato jsonb,
  endereco jsonb,
  imagem_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

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