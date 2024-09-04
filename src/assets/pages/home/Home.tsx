function Home() {
  return (
    <div className='flex justify-center bg-white py-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 container max-w-7xl px-4'>
        <div className='flex flex-col justify-center items-start p-6'>
          <h2 className='text-4xl font-bold mb-4'>Bem-vindo à Farmácia Saúde & Vida!</h2>
          <p className='text-lg mb-6'>Aqui você encontra os melhores produtos para seu bem-estar.</p>

        </div>
        <div className='flex justify-center items-center'>
          <img
            src="https://ik.imagekit.io/w0ctnknwb/Designer%20(34).jpeg?updatedAt=1725463954042"
            alt="Produtos"
            className='w-full h-auto rounded-lg'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
