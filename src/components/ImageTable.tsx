import { useEffect } from 'react';
import photosArray from '../assets/images/photosArray.json';

function ImageTable(): React.JSX.Element {
  // This effect mounts the images to the image table columns
  // It mounts the images horizontally in the vertical columns
  useEffect(() => {
    const imageTableColumns = document.getElementById('image-table')?.querySelectorAll('.image-table-column');
    if (!imageTableColumns) return;

    for (let i = 0; i < photosArray.length; i++) {
      const image = document.createElement('img');
      image.src = `src/assets/images/${photosArray[i]}`;
      image.alt = `Image ${i + 1}`;
      switch (i % 4) {
        case 0:
          imageTableColumns[0]?.appendChild(image);
          break;
        case 1:
          imageTableColumns[1]?.appendChild(image);
          break;
        case 2:
          imageTableColumns[2]?.appendChild(image);
          break;
        case 3:
          imageTableColumns[3]?.appendChild(image);
          break;
        default:
          break;
      }
    }
  }, []);

  return (
    <div id='image-table'>
      <div className='image-table flex'>
        <div className='image-table-column'></div>
        <div className='image-table-column'></div>
        <div className='image-table-column'></div>
        <div className='image-table-column'></div>
      </div>
    </div>
  )
}

export default ImageTable;