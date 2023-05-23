function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Header({ title }) {
  const title_class = "flex flex-wrap justify-center gap-x-2 inline-block text-4xl font-title mt-16 mb-16 md:mb-20 md:text-7xl font-semibold text-gray-primary";
  const lower_class = "inline-block font-light italic -mb-5 mt-3 text-xl md:text-3xl text-gray-primary";
  const concat = title
    .split(" ")
    .map(word => {
      if (capitalizeFirstLetter(word) === word) {
        // title case
        return <span>{word}</span>
      } else {
        // regular
        return <span className={`${lower_class}`}>{word}</span>
      }
    })

  return <div className="text-center w-full">
    <h1 className={title_class}>{concat}</h1>
    <div>
      <hr />
    </div>
  </div>
}
