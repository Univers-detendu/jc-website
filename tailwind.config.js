module.exports = {
    content: [
      './layouts/**/*.html.twig',
    ],
    safelist: [
      'text-neutral-400',
      'bg-neutral-400',
      'flex-col',
      'flex-row',
      'gap-8',
      'space-y-4',
      'space-x-8',
      'basis-1/2',
      'justify-center',
      'text-center',
    ],
    theme: {
      fontFamily: {
        'title': ['"Gasoek One"'],
      },
      extend: {
        colors: {
          primary: '#0081FF',
          secondary: '#1E0D56',
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }
