# vuetify-techvogel

## Setup do projeto:

```
npm install
```

### Compilação com hot-reload para desenvolvimento:

```
npm run serve
```

### Compilação para produção:

```
npm run build
```

### Rodar linter:

```
npm run lint
```

---

## Padrão de componentes

> ---

v-combobox: `outlined`

> ---

v-text-field: `outlined`

> ---

Todo input deve ter um texto em cima. O componente é o:

`<form-input>`, registrado globalmente

# Padrões de escrita de código:

Para todo input, usar o componente `<form-input>`, localizado em `src/Components/FormInput.vue`

> ---

Não usar `this` nas tags dentro de `<template>` nos arquivos `.vue`

> ---

Escrever `data` assim:

```
data () {
  return {
    ...
  }
}
```

> ---

Essa deve ser a ordem dos componentes nas tags `<script>`:

```
name
components
mounted
computed
data
methods
watch
```

> ---

Preferir isso:

```
<tag :prop="teste" />
```

à isso:

```
<tag :prop="teste" ></tag>
```

Sempre que possível

> ---

Preferir `async await` à `Promises`

> ---

Toda arquivo deve ter pelo menos um atributo name na tag `<script>` <b> condizente com o nome do arquivo </b>

Esse atributo deve ser escrito em <b> PascalCase </b>

Exemplo:

```
// Arquivo Teste.vue

<script>
export default {
  name: 'Teste'
}

</script>
```

# Regras para commits

- Não commitar código comentado
- Não commitar console.log
- Rodar `npm run lint` antes de commitar
- Se atentar para as regras de escrita de código documentadas acima

# Checklist para novas features

- [ ] Esboço da tela no figma
- [ ] Esboço da tela no front
- [ ] Tornar tela responsiva
- [ ] Adicionar binds para variáveis e botões (caso necessário)
- [ ] Modularizar textos para internacionalização
- [ ] Levantamento de rotas para o back
- [ ] Testes de rotas pelo Postman
- [ ] Integração com o backend
- [ ] Loaders onde for necessário
