import React from 'react'
import '../support/footer.css'

class Footer extends React.Component {
    render() {
        return (
        <footer  id="footer"  className="page-footer font-small special-color-dark pt-4">
        <div className="footer-copyright text-center py-3">© 2020 : NIKOLAS WIJAYA
        </div>
        <div className="container-fluid">
          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <a className="btn-floating btn-fb mx-1" href="https://www.facebook.com/nikolaswijaya90">
                <i className="fab fa-facebook-f"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-tw mx-1" href="https://github.com/huangnik90">
                <i className="fab fa-github"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-li mx-1" href="https://www.linkedin.com/in/nikolas-wijaya-17965b180/">
                <i className="fab fa-linkedin-in"> </i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
        )
    }
}

export default Footer