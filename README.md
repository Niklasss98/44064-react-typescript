# Practico-7-React

Entrega del Trabajo Práctico N7 de Desarrollo de Software

Alumno: Lucca, Nicolás Ignacio / Legajo: 44064 / Curso: 3K09

Aplicación React para utilizar, entre otros elementos, una tabla de productos que permita tanto como verificar, editar y borrar los productos.

**Nota**: No pude linkear las imágenes de la carpeta 'src/assets/images' con el carrousel, así que terminé usando la ruta de la página web.

Link de Vercel con la App andando: https://practico-7-react.vercel.app/

Aquí se muestran algunas de las dependencias utilizadas:

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
