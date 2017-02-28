import React from 'react';
import './dribbble.sass';

class Dribbble extends React.Component {
  getDribbbleFeed() {
    const populateDribbbleList = this.populateDribbbleList;
    const request = new XMLHttpRequest();
    const user = 'joshuaogle';
    const token = '916a8ccf0526e148068589aa369f00e34084a34be8ed525faf699c1ef963cd45';
    request.open('GET', `https://api.dribbble.com/v1/users/${user}/shots?access_token=${token}`, true);
    request.send();

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        const shots = JSON.parse(request.responseText);
        if (shots.length) {
          populateDribbbleList(shots);
        }
      }
    };
  }

  populateDribbbleList(shots) {
    const firstEight = shots.slice(0, 8);
    const dribbbleSection = document.getElementsByClassName("dribbble")[0];
    const dribbbleList = document.getElementsByClassName("dribbble-list")[0];
    for (const shot of firstEight) {
      console.log(shot.images);
      const image_url = (shot.images.hidpi != null) ? shot.images.hidpi : shot.images.normal;
      const image = `<img src='${image_url}' alt='${shot.title}' />`;
      const imageLink = `<a href='${shot.html_url}' target='_new'>${image}</a>`;
      dribbbleList.innerHTML += `<li>${imageLink}</li>`;
    }
    dribbbleSection.classList.add("active");
  }

  componentDidMount() {
    this.getDribbbleFeed();
  }

  render() {
    return (
      <section className="dribbble">
        <div className="section-title">On Dribbble</div>
        <h2>A peak of some smaller designs</h2>

        <ul className="dribbble-list" />

        <div className="section-footer">
          <a href="http://dribbble.com/joshuaogle" target="_new" className="button">
            More on Dribbble
          </a>
        </div>
      </section>
    );
  }
}

export default Dribbble;
