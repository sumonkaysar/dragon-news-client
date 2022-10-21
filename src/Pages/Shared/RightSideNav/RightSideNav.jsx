import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import {FaGoogle, FaGithub, FaFacebook, FaYoutube, FaTwitter, FaWhatsapp, FaDiscord} from 'react-icons/fa'
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup className='mb-4' vertical>
        <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login with Google</Button>
        <Button variant="outline-dark"><FaGithub /> Login with Github</Button>
      </ButtonGroup>
      <div>
        <h5>Find us on</h5>
        <ListGroup>
          <ListGroup.Item className='mb-2'>
            <FaFacebook />
            <span>FaceBook</span>
          </ListGroup.Item>
          <ListGroup.Item className='mb-2'>
            <FaYoutube />
            <span>YouTube</span>
          </ListGroup.Item>
          <ListGroup.Item className='mb-2'>
            <FaTwitter />
            <span>Twitter</span>
          </ListGroup.Item>
          <ListGroup.Item className='mb-2'>
            <FaWhatsapp />
            <span>WhatsApp</span>
          </ListGroup.Item>
          <ListGroup.Item className='mb-2'>
            <FaDiscord />
            <span>Discord</span>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <BrandCarousel />
    </div>
  );
}

export default RightSideNav;
