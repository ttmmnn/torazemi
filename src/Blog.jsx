import React from 'react';
import Article from './Article';

class Blog extends React.Component {
  //BlogクラスはReactのコンポーネントを継承しますという意味
  constructor(props) {
    //クラスなのでコンストラクターの初期化が必要。
    super(props); //これはおまじないみたいなもの
  }
  render() {
    const authorName = 'Torahack';
    return (
      //　divダグで分けずに、コンポーネントを2つ以上書く場合は、React.Fragmentを使う　<> </>の省略形でも同じ
      <>
        <Article title={'Reactの使い方'} order={1} />
        <Article title={'JSXの使い方'} order={2} />
        <Article title={'環境構築してみよう'} order={3} />
      </>
    );
  }
}

export default Blog; //クラスを宣言したらexportしておく
