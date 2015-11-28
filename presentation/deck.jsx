// deck.jsx

import React, { Component } from 'react';
import {
  Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
  Heading, Image, Layout, ListItem, List, Quote, S, Slide, Text
  } from '../src/spectacle';

export default class extends Component {
  render() {
    return (
      <Deck>
      <Slide>
      <Text>Hello</Text>
      </Slide>
      </Deck>
  )
  }
}