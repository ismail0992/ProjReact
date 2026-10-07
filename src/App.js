import { createElement as h, Fragment } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'

const places = [
  {
    name: 'Lisbon, Portugal',
    note: 'Salt air, tiled facades, and one more stop for pastel de nata.',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1000&q=85',
    tag: 'COASTAL CITY',
    days: '4 DAY GUIDE',
  },
  {
    name: 'Kyoto, Japan',
    note: 'Quiet lanes, early light, and tea worth slowing down for.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=85',
    tag: 'CULTURE & CRAFT',
    days: '5 DAY GUIDE',
  },
  {
    name: 'Oaxaca, Mexico',
    note: 'Market mornings, mezcal evenings, and color at every turn.',
    image: 'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=1000&q=85',
    tag: 'FOOD & COLOR',
    days: '3 DAY GUIDE',
  },
]

function PlaceCard({ place, index }) {
  return h(
    Col,
    { md: 4, key: place.name },
    h(
      Card,
      { className: 'destination-card h-100' },
      h(
        'div',
        { className: 'card-image-wrap' },
        h(Card.Img, {
          variant: 'top',
          src: place.image,
          alt: `A view of ${place.name}`,
        }),
        h('span', { className: 'image-index' }, `0${index + 1}`),
      ),
      h(
        Card.Body,
        null,
        h(
          'div',
          { className: 'card-meta' },
          h('span', null, place.tag),
          h('span', null, place.days),
        ),
        h(Card.Title, null, place.name),
        h(Card.Text, null, place.note),
        h(
          'a',
          { className: 'card-link', href: '#about', 'aria-label': `Explore ${place.name}` },
          'EXPLORE GUIDE ',
          h('span', { 'aria-hidden': 'true' }, '↗'),
        ),
      ),
    ),
  )
}

function App() {
  return h(
    Fragment,
    null,
    h(
      'div',
      { className: 'App' },
      h(
        Navbar,
        { expand: 'md', className: 'site-nav' },
        h(
          Container,
          null,
          h(
            Navbar.Brand,
            { href: '#home', className: 'brand-mark' },
            h('span', { className: 'brand-icon', 'aria-hidden': 'true' }, 'R'),
            ' ROAM',
            h('span', { className: 'brand-period' }, '.'),
          ),
          h(Navbar.Toggle, { 'aria-controls': 'main-navigation' }),
          h(
            Navbar.Collapse,
            { id: 'main-navigation' },
            h(
              Nav,
              { className: 'ms-auto align-items-md-center gap-md-4' },
              h(Nav.Link, { href: '#destinations' }, 'Destinations'),
              h(Nav.Link, { href: '#about' }, 'Our approach'),
              h(
                Button,
                { href: '#destinations', className: 'nav-cta' },
                'Find your next trip ',
                h('span', { 'aria-hidden': 'true' }, '↗'),
              ),
            ),
          ),
        ),
      ),
      h(
        'main',
        { id: 'home' },
        h(
          'section',
          { className: 'intro-section', id: 'about' },
          h(
            Container,
            null,
            h('p', { className: 'eyebrow' }, 'FIELD NOTES FOR THE CURIOUS'),
            h('h1', null, 'Go a little', h('br'), h('span', null, 'further.')),
            h(
              'div',
              { className: 'intro-bottom' },
              h(
                'p',
                { className: 'intro-copy' },
                'Thoughtful guides to places that stay with you. Start with a city, follow your curiosity, and leave room for the unexpected.',
              ),
              h(
                'a',
                { className: 'text-link', href: '#destinations' },
                'EXPLORE THE JOURNAL ',
                h('span', { 'aria-hidden': 'true' }, '↓'),
              ),
            ),
          ),
          h('div', { className: 'intro-stamp', 'aria-hidden': 'true' }, 'TAKE', h('br'), 'THE', h('br'), 'SCENIC', h('br'), 'ROUTE'),
        ),
        h(
          'section',
          { className: 'destinations-section', id: 'destinations' },
          h(
            Container,
            null,
            h(
              'div',
              { className: 'section-heading' },
              h(
                'div',
                null,
                h('p', { className: 'eyebrow' }, 'THE SHORTLIST · 01'),
                h('h2', null, 'Somewhere to begin'),
              ),
              h('span', { className: 'section-count' }, '03 PLACES'),
            ),
            h(Row, { className: 'g-4' }, places.map((place, index) => h(PlaceCard, { place, index, key: place.name }))),
          ),
        ),
      ),
      h(
        'footer',
        { className: 'site-footer' },
        h(
          Container,
          { className: 'd-flex justify-content-between align-items-center' },
          h('span', null, 'ROAM', h('span', { className: 'brand-period' }, '.'), ' FIELD NOTES'),
          h('span', null, 'MADE FOR THE LONG WAY ROUND'),
        ),
      ),
    ),
  )
}

export default App