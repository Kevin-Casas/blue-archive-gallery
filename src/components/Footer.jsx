import React, { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (  
    <Fragment>
      <Row className='bg-white fixed-bottom text-primary'>
        <Col>
          <a 
          href="https://bluearchive.nexon.com/"
          target='_blank'>
            <img 
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc1Nzc3NTc3Kzc3N//AABEIACAAIAMBIgACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAAFBgcE/8QALBAAAgECBQIFAwUAAAAAAAAAAQIDBBEABRIhMSJBBmFxgaEUUZEjQrHw8f/EABYBAQEBAAAAAAAAAAAAAAAAAAQCAP/EABwRAAIDAAMBAAAAAAAAAAAAAAECAAMRBDFhEv/aAAwDAQACEQMRAD8AXvD0RaWSa5AA0gX5v/mKN4Vpo4qOavlG6khduAB28yf4wk+FqGWqoZVhZUkAL3YXA6gv474o3h7Kq+D6inr4xpinZYXRdKSLc2bTckd+T39MLvbBk1awyCsEoa1hLZWI41W2Pvx+MYMzqzk0Ga1sdO7lodaOm1msbj41cYzZnmElNXNQCirHCqt5QEKKt1ux6tVxccDvfbnBKdDNTTUsgs7xMDZrc9N79r/GDD2Ue5LMmrfpp5BTmytG0drftYEX9eD7DFPyDxDSZlDHHK4hrFQM8UnTqG41LfkGx/tsSHI0dM5iy2smGqoBSZgtxESNQZbDsLjfvudsP1QEy9VSaUyQKP0ZYywd15MbGPqO+4IFjwR91W1q8E3KalgmaYw5vmsS1MFDHHradtLyMwUKv2AO7X2Gwt58XGeIc2FLSVbRuqyRlYVY92YWG/kWB9sB3zvJkA+lopYHQk2SBF67ggncX3X5xmeooqmCors4lMdC5LmC13l1W6bD7WHpa+1riBRkoctvjXXDP//Z" 
            alt="BA Logo"
            className='rounded-5'
          />
          </a>
          
          <a 
          href="https://twitter.com/EN_BlueArchive"
          target='_blank'>
            <img 
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAeFBMVEUAAAAcl+8cm/Adm/Adm/AdmvAdmvEYl+8Qn+8bmu8bme8em/Ecme8dmu8emvAgl+8bmu8cm/Acm/EdnPAem/AcmvAdnO8dmu8cmu8Zme8ZnO8gn+8em+8cm+8cmu8gmu8enPAeme8cm+8em+8dmu8dmu8dme8gn++31JfqAAAAKHRSTlMAQL/v/9+fIBBgcH+AsN8gMM9/3++vUGCQUFAgcODAMN9wQIDQwKAQsFNO+QAAALZJREFUeAHUzsUBhEAUA9AMZN3dcei/Q5zxBvYdvwZ/SgQhZ/MFALFEb7WGZsPBdh3MMdhxDWlFaX84onciz5hcOLneLnc5wJlAT1DzwODJTvCyPvCN0efKXnhbizOVA0bLL72WGP2CCz1CTJ70ijCJ6fWE5M9whPJI/B+k9Hml7QFNRscchpyW/QGmR0FDBkd89QWQ4nNI6ZpBd19t5xdqSud/abQzuD7prriS16JKm6kPxXwGAM9DDGV/J75tAAAAAElFTkSuQmCC" 
            alt="Twitter"
            />
          </a>

          <a 
          href="https://play.google.com/store/apps/details?id=com.nexon.bluearchive&hl=en_US"
          target='_blank'>
            <img 
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADNklEQVR4AcXUA4wdURiG4VPbtu32mmvUtm3bts2gnNq2bbtBbSzn3n79M8nZrvdcZZO8yUTzPUMGIFmLOlBJTXhtqcPUUaoDxRwp16aObORuHcNpxmwnUjM5/uICam0PyKza2miJSmoGOlH0HlIGjwPUm9tOqrXdD6qt9RANEb39VEGPAXym/5YMK9ehxu5ahKgbH4I3m0rjdoDfBEj+EwDDyrUiiO9UR7ffAd8pMvzHAyJ3Ivr74R7AtD8SIRATURO1ttWBakuCCN4BqrDLAApRiAmAcflm1NilJUSwCAJqqcm8nBs7pRu4y+gCIAoRqdwJ07LtdCfUSSLUlEZqjBQbevwctVvX1QUA7zd8pkYIIfh41o2d0Xh7ICJOpAFOsic0ZHYBIIZQKynjaLQtCPLJVKCrRyQhaAjUYaqIMCBxxA5CqAgRRIjmUMapzBu7oHG0cZmPx2welU4AkARi6T7U3KWHanuAgshCV952hy/sJ1MmNs77Q5mcAHBEuIKwLD6Mmrv1yCS1QMftfsApJjLO+0A1cxjAEb5TwxRE/uX30PmkFrjAgJPRn7lQklMAXwL4TAtB8UVA927PIA8sBNxikC+mhHzMgwA+7j0tFEWXAN1GXkGksSzkMpXxdWBZ/L3LYLvMRBHfqLbCAD7uNT0MJRYDfYedQ4S5FOymonjvbcD7Slb86Fsa9psM9itJIuxUsPhLGG282BJg8ODjgL4QbKbieO+nxyc/NT55a/CughXfu5dLCrGGyir2GcYzPoTGYSiESFNJGtfhk69aSUH4qPG+YoKIc1Q58R+R+Hj8iJ5lYbuUArazKd/QkL9Tv2Lfqb9hpfGiSYzHh3hXxjv05/Di/e23GB8TB/Bxy4xw5YUbMfAwjRdJajw6Yun7KpaM37uWY/YbBDjpIICP023HxH47AV0ehJtLi4wfp0pR7H01M6OvwnGA/9Rf0v/xHTSeF2GWMviQ+PhzykoxJVcA1eZBKh5jvGxi47+oHnzULYCacyFN7is0Po9KRzG3Am7XbzopxFoeoZZyCY0foIrwIbcDZFPxzN+9qy2JZ/whZeADngJEP0k76gB1kOooOuwKIFn7B3LHHIJtp64TAAAAAElFTkSuQmCC" 
            alt="Google Play" 
            />
          </a>

          <a 
          href="https://www.youtube.com/@bluearchive_Global"
          target='_blank'>
            <img 
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA3ElEQVR4Ae2WIQzDIBBFEdPV6Ip6L2Y3Me9NMzuB98GbWrysqHf1otWYismm+vYFTRCEhXXjJrjkmSslLwHgi8vjxkoRKAL/J0BCSHAHGhjQgxHMwIKnY/Px+taNHd2/Bmg3p4wKuIH0Y1RQAB+ugDJxDgn0GQVMSMBmFJhDApSTYwLLQtR13xNAo0oWINS6ErXtpxInX0CmC3g1TURNkypQ+QL1IYG9hiFFRPIL8C8B/ybkO4bsFxH7Vcz+GLE/x5yBRL+LZDVQkTi2Ochn70dimQpFspKKi0AReAF/IVUTZ3/BGQAAAABJRU5ErkJggg==" 
            alt="Youtube" 
            />
          </a>

        </Col>

        <Col className='text-decoration-underline'>
          <h6>Todos los derechos son propiedad de sus respectivos dueños</h6>
        </Col>

        <Col>
          <a href="mailto:axelc26@hotmail.com"><h6>Contacto</h6></a>
        </Col>
      </Row>
    </Fragment>
  );
}
 
export default Footer;