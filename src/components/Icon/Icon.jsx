const Icon = ({ id, width = 32, height = 32, className }) => {
  return (
    <svg className={className} width={width} height={height}>
      <use href={`/src/components/img/icons/sprite.svg#${id}`}></use>
    </svg>
  );
};

export default Icon;
