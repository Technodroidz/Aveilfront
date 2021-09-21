/* import external modules */
import { Carousel } from 'react-responsive-carousel'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'

/* import internal modules */
import Testimonial from './Testimonial'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Section3 = () => {
  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
    color: '#615F5F',
  }

  const indicatorStyles = {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#615F5F',
    width: 8,
    height: 8,
    display: 'inline-block',
    margin: '0 8px',
    borderRadius: 10,
  }

  return (
    <Carousel
      autoPlay={true}
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      stopOnHover={true}
      infiniteLoop={true}
      emulateTouch={true}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <ArrowBackIos
            onClick={onClickHandler}
            style={{ ...arrowStyles, left: 15 }}
          />
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <ArrowForwardIos
            onClick={onClickHandler}
            style={{ ...arrowStyles, right: 15 }}
          />
        )
      }
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              style={{ ...indicatorStyles, background: '#615F5F' }}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          )
        }
        return (
          <li
            style={indicatorStyles}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        )
      }}
    >
      <div>
        <Testimonial />
      </div>
      <div>
        <Testimonial />
      </div>
      <div>
        <Testimonial />
      </div>
    </Carousel>
  )
}

export default Section3
