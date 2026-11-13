import logo from "../assets/logo.png"

export default function Header() {
  return (
    <header className="flex flex-col justify-center items-center mt-8 mb-8 md:mb-16">
      <img
        className="w-44 h-44 object-contain mb-8"
        src={logo}
        alt="A canvas"
      />
      <h1 className="text-xl md:text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-pacifico">
        ReactArt
      </h1>
      <p className="text-stone-500">A community of artists and art-lovers.</p>
    </header>
  )
}
