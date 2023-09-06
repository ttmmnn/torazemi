import React from 'react';
import Article from './Article';
import * as FooBar from './components/FooBar';
import Hoge from './components/Hoge';

const Blog = () => {
  // componentDidMount() {
  //   // いいねをクリックされたら、数字がカウントアップする
  //   document.getElementById('counter').addEventListener('click', this.countUp);
  // }

  // componentDidUpdate() {
  //   // いいねを10回クリックしたら、数字が０に戻る
  //   if (this.state.count >= 10) {
  //     this.setState({ count: 0 });
  //   }
  // }

  // componentWillUnmount() {
  //   // コンポーネントが破棄される直前にリソースを開放するため、リスナーを解除する
  //   document
  //     .getElementById('counter')
  //     .removeEventListener('click', this.countUp);
  // }

  // countUp = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };

  return (
    //　divダグで分けずに、コンポーネントを2つ以上書く場合は、React.Fragmentを使う　<> </>の省略形でも同じ
    <>
      <Article
        title={'Reactの使い方'}
        // count={this.state.count}
      />
      <FooBar.Foo />
      <FooBar.Bar />
      <Hoge />
    </>
  );
};
export default Blog; //クラスを宣言したらexportしておく
