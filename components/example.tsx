type Props = {
  caption: string,
  image: string,
  transparent?: boolean,
}

const Example = ({ caption, image }: Props) => {
  return (
    <figure>
      <div className="surface">
        <img
          src={`/images/${image}`}
          className="case-study-example"
        />
      </div>
      {caption && (
        <figcaption>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export default Example;