type Props = {
  caption: string,
  image: string
}


const Example = ({ caption, image }: Props) => {
  return (
    <figure>
      <img src={`/images/${image}`} className="case-study-example" />
      {caption && (
        <figcaption>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export default Example;