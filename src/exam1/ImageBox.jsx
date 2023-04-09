import withHover from "./withHover";

function ImageBox({
  imageUrl,
  imageTitle,
  isHovered,
  handleMouseEnter,
  handleMouseLeave,
}) {
  return (
    <div>
      {isHovered && <div id="hover">{imageTitle}</div>}
      <img
        src={imageUrl}
        alt={imageTitle}
        width="200px"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <hr />
    </div>
  );
}

export default withHover(ImageBox);
