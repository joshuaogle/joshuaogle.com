type Props = {
  caption: string,
  image: string
}


const Example = ({ caption, image }: Props) => {
  return (
    <figure>
      <img src={`/source/images/${image}`} className="case-study-example" />
      {caption && (
        <figcaption>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export default Example;