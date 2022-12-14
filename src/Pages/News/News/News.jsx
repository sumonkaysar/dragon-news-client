import { Link, useLoaderData } from "react-router-dom";
import { Button, Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const News = () => {
  const news = useLoaderData();
  const { category_id, title, author, details, image_url, rating, total_view } = news;

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
          {details}
        </Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="primary">All news in this category</Button>
        </Link>
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

export default News;
