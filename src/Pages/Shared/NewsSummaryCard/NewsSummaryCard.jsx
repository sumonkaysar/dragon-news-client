import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsSummaryCard = ({ news }) => {
  const { _id, title, author, details, image_url, rating, total_view } = news;

  return (
    <Card className='mb-3 mb-lg-4'>
      <Card.Header className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <Image
            src={author.img}
            style={{ height: '50px' }}
            roundedCircle
          />
          <div className='ms-2'>
            <p className='mb-0'>{author?.name}</p>
            <p className='mb-0 text-secondary'>
              <small>{author?.published_date}</small>
            </p>
          </div>
        </div>
        <div>
          <FaRegBookmark className='me-2' />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant='top' src={image_url} />
        <Card.Text>
          {details.length > 200 ?
            <>
              {details.slice(0, 250)} ... <Link to={`/news/${_id}`}>Read more</Link>
            </>
            : details
          }
        </Card.Text>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-between align-items-center'>
        <div>
          <FaStar className='text-warning' />
          <span className='ms-2'>{rating?.number}</span>
        </div>
        <div>
          <span className='me-2'>{total_view}</span>
          <FaEye />
        </div>
      </Card.Footer>
    </Card>
  );
}

export default NewsSummaryCard;
