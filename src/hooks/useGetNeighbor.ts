interface HasId {
  id: string;
}

type NeighborOption = 'left' | 'right';

export default function getNeighbor<T extends HasId>(
  data: T[], id: string, option: NeighborOption
): T[] | null {
  const currentIndex = data.findIndex(element => element.id === id);

  if (currentIndex === -1) {
    return null;
  }

  const neighborIndex = option === 'left' ? currentIndex - 1 : currentIndex + 1;

  if (neighborIndex < 0 || neighborIndex >= data.length) {
    return null;
  }

  const neighborElement = data[neighborIndex];
  return [data[currentIndex], neighborElement];
}