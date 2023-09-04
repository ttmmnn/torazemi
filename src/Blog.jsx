import React from 'react';
import Article from './Article';
import * as FooBar from './components/FooBar';
import Hoge from './components/Hoge';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      count: 0,
    };
  }

  componentDidMount() {
    // いいねをクリックされたら、数字がカウントアップする
    document.getElementById('counter').addEventListener('click', this.countUp);
  }

  componentDidUpdate() {
    // いいねを10回クリックしたら、数字が０に戻る
    console.log(this.state.count);
    if (this.state.count >= 10) {
      this.setState({ count: 0 });
    }
  }

  componentWillUnmount() {
    // コンポーネントが破棄される直前にリソースを開放するため、リスナーを解除する
    document
      .getElementById('counter')
      .removeEventListener('click', this.countUp);
  }

  //　公開状態を反転させる関数
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished,
    });
  };

  countUp = () => {
    this.setState({ count: this.state.count + 1 });
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
          count={this.state.count}
        />
        <FooBar.Foo />
        <FooBar.Bar />
        <Hoge />
      </>
    );
  }
}

export default Blog; //クラスを宣言したらexportしておく
