interface ImageProps {
  path: string;
  key: number
}

function Image({ path, key }: ImageProps) {
  console.log("Image component rendered with path:", path);
  return <img key={key} src={path} alt="" width={"100%"} height={"100%"}/>;
}

export default Image;