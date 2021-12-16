import Link from "next/link";

const Show = ({ show }) => (
  <div>
    <p>This page uses getStaticProps() to pre-fetch a TV show.</p>

    <hr />

    {show.map((pet, i) => (
      <div key={i} className="p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 ">
        <div className="h-full bg-gradient-to-r from-red-500 to-yellow-500 hover:from-yellow-400 hover:to-red-400 rounded-lg overflow-hidden">
          <img
            className="lg:h-96 md:h-36 w-full object-cover object-center"
            src={pet.image}
            alt="pets"
          />
          <div className="p-6 items-center mx-auto">
            <h1 className="title-font text-lg font-medium mb-3 font-pumpkin">
              {pet.name}, {pet.age} / {pet.location}
            </h1>
            <p className="leading-relaxed mb-3 font-sfpro">{pet.funfact}</p>
            <button className="flex mt-8 mb-8 mx-auto text-center font-bold py-2 px-4 rounded-full border border-white  font-pumpkin ">
              Connect with {pet.name}
            </button>
          </div>
        </div>
      </div>
    ))}

    <hr />

    <Link href="/">
      <a>Go back home</a>
    </Link>
  </div>
);

export async function getStaticProps(context) {
  const res = await fetch(`https://petscabndate.glitch.me`);
  const data = await res.json();

  return {
    props: {
      show: data,
    },
    revalidate: 60,
  };
}

export default Show;
