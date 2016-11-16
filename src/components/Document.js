import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';
import MenuEntry from './MenuEntry';
import {connect} from 'react-redux';

class Document extends Component {
  styles = StyleSheet.create({
    title: {
      'font-family': 'Open Sans',
      'font-size': '2em',
      'font-weight': 'bold',
      'text-align': 'center',
    },
    body: {
      'line-height': '1.4em',
      'font-size': '1.1em',
    }
  })

  render = () =>
    <div>
      <h1 className={css(this.styles.title)}>{this.props.title}</h1>
      <div className={css(this.styles.body)}>
        <p>
          Jujubes chupa chups marzipan lollipop cupcake powder croissant dragée brownie. Chocolate cupcake muffin soufflé topping. Carrot cake sweet roll cake toffee tiramisu jelly beans. Wafer soufflé tart carrot cake wafer soufflé tootsie roll chupa chups toffee. Jelly beans caramels topping icing sesame snaps lemon drops. Oat cake cupcake marzipan macaroon macaroon tootsie roll caramels. Cookie gummies jelly-o. Marzipan croissant gummies sugar plum muffin tiramisu toffee gummies. Oat cake halvah cheesecake jujubes muffin gummies fruitcake gummi bears. Fruitcake chocolate cake halvah pie ice cream lollipop ice cream biscuit. Pudding apple pie candy canes cotton candy tart pudding. Cookie jelly cake biscuit soufflé gummies soufflé caramels. Cake tart cake cookie caramels jelly beans fruitcake muffin biscuit.
        </p>
        <p>
          Candy canes tootsie roll oat cake muffin croissant chupa chups donut. Jelly-o wafer marshmallow toffee. Pastry gummies toffee jelly beans bear claw cupcake chupa chups wafer. Chupa chups chupa chups topping pudding carrot cake. Gummi bears chocolate bar candy canes pudding. Macaroon fruitcake tiramisu jelly gummi bears chocolate bar cake apple pie icing. Cupcake chocolate donut gingerbread lemon drops chocolate bar jujubes. Carrot cake powder cupcake. Cookie tootsie roll gummi bears croissant carrot cake cake tiramisu jujubes wafer. Jelly bear claw bear claw soufflé topping jelly beans. Brownie pie gummies. Icing toffee jelly-o sweet. Wafer halvah lemon drops brownie ice cream bonbon macaroon caramels bonbon.
        </p>
        <p>
          Cotton candy caramels chupa chups. Jelly sweet roll lollipop oat cake icing pastry marzipan dragée. Bonbon pie sugar plum gingerbread candy caramels. Jujubes biscuit jujubes liquorice chocolate cake jelly liquorice cake. Gingerbread fruitcake wafer halvah sesame snaps fruitcake pastry jelly beans chupa chups. Gummies jelly icing soufflé halvah biscuit chocolate bar. Dragée candy ice cream cake. Carrot cake wafer pie muffin dessert powder marzipan tart. Pudding marzipan jelly beans. Dessert cookie halvah powder. Marshmallow cake jujubes dessert tootsie roll dragée sweet pastry. Pudding lollipop chupa chups danish sweet. Cake chocolate cake cotton candy candy candy.
        </p>
        <p>
          Fruitcake biscuit chocolate pie bear claw gummies oat cake. Marshmallow croissant gummi bears lollipop. Icing jelly halvah carrot cake cake tootsie roll toffee. Jelly beans toffee dessert powder cheesecake jelly. Dessert jelly apple pie lollipop. Toffee lollipop oat cake. Apple pie fruitcake biscuit icing gummi bears pudding chocolate. Cake lemon drops cake apple pie jujubes toffee jelly gingerbread tiramisu. Jujubes cake biscuit sweet danish brownie topping powder caramels. Chocolate biscuit halvah gummies. Danish toffee toffee danish cake. Bear claw icing cake pastry.
        </p>
      </div>
    </div>
}

export default Document;
