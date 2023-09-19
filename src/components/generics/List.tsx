type ListProps<T> = {
  items: T[] // generic is to allow any type
  onClick: (value: T) => void
};

export const List = <T extends {id: number}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item.id}
          </div>
        )
      })}
    </div>
  );
};
