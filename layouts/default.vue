<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>

@font-face {
  font-family: 'Montserrat-M';
  font-weight: 500;
  src: url('~assets/fonts/Montserrat-Medium.ttf') format('truetype');
}

@font-face {
  font-family: 'Montserrat-B';
  font-weight: 600;
  src: url('~assets/fonts/Montserrat-SemiBold.ttf') format('truetype');
}

html {
  font-family:
    'Montserrat-M',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  height: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
