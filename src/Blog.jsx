import React from 'react';
import Article from './Article';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      order: 1,
    };
  }

  //　公開状態を反転させる関数
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished,
    });
  };

  render() {
    const authorName = 'Torahack';
    return (
      //　divダグで分けずに、コンポーネントを2つ以上書く場合は、React.Fragmentを使う　<> </>の省略形でも同じ
      <>
        <Article
          title={'Reactの使い方'}
          isPublished={this.state.isPublished}
          toggle={() => this.togglePublished()}
        />
      </>
    );
  }
}

export default Blog; //クラスを宣言したらexportしておく
