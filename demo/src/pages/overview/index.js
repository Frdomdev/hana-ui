/**
 * Copyright(c) dtysky<dtysky@outlook.com>
 * Created: 25 Nov 2017
 * Description:
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import cx from 'classnames';

import config from '../../config';
import MultiLang from 'demo/MultiLang';
import FireFlies from 'demo/FireFlies';
import './base.scss';

const keyCodes = {
  37: 'LEFT',
  38: 'UP',
  39: 'RIGHT',
  40: 'DOWN'
};

const pageChangeDuration = 1000;

const getUrl = (url, lang) => `/${lang}/${url}`;

const pages = [
  <MultiLang
    key={'intro'}
    className={cx('page', 'intro')}
    childrenAtPre
    cn={
      <div className={'page-content'}>
        <h2>hana-ui</h2>
        <p>一个清新二次元风格的ReactUI库。</p>
      </div>
    }
    en={
      <div className={'page-content'}>
        <h2>hana-ui</h2>
        <p>A React UIKit with fresh nijigen style.</p>
      </div>
    }
  >
    <img
      className={'page-img'}
      src={config.overview.intro}
      alt={'intro'}
    />
  </MultiLang>,
  <MultiLang
    key={'origin'}
    className={cx('page', 'origin')}
    childrenAtPre
    cn={
      <div className={'page-content'}>
        <h2>起源</h2>
        <p>hana是一个少女，致力于以更加简单的方式构建虚拟世界，借此连通两个完全不同的两个次元。在构建过程中，她抽象出了一些用于快速构建这个世界的基石，通过利用它们，你可以快速将一个你期望的世界展现出来。</p>
      </div>
    }
    en={
      <div className={'page-content'}>
        <h2>Origin</h2>
        <p>hana is a girl who wish to connect two different dimension by simplify the way to build the virtual world. After may trials, she abstracted a codebase for faster building, you can use them to get your world as faster as you want.</p>
      </div>
    }
  >
    <img
      className={'page-img'}
      src={config.overview.origin}
      alt={'intro'}
    />
  </MultiLang>,
  <MultiLang
    key={'style'}
    className={cx('page', 'style')}
    childrenAtPre
    cn={
      <div className={'page-content'}>
        <h2>清新自然</h2>
        <p>hana相信另一个世界应当是美好的，所以她用“花”来描述那个世界，清新和自然是她所期望世界的代表，所以她带来的这些基石，也自然而然带上了清新的味道——如果这也符合你的审美，那再好不过了。</p>
      </div>
    }
    en={
      <div className={'page-content'}>
        <h2>Fresh and natural</h2>
        <p>hana believe that another world should be beautiful, it is reason why she describes that world by <strong>hana(flowers)</strong>. She expects a fresh and natural world, so the codebase has fresh style - she wish it also fits in your aestheticism.</p>
      </div>
    }
  >
    <img
      className={'page-img'}
      src={config.overview.style}
      alt={'intro'}
    />
  </MultiLang>,
  <MultiLang
    key={'useful'}
    className={cx('page', 'useful')}
    childrenAtPre
    cn={
      <div className={'page-content'}>
        <h2>开箱即用</h2>
        <p>hana虽然是个清新的少女，却也有着工程师的灵魂，她非常务实，并认为这才是工程人的根基。像“设计语言”这种东西，她并无法理解，所以对于hana-ui的定位，是一个开箱即用的“React UIKIT”。</p>
      </div>
    }
    en={
      <div className={'page-content'}>
        <h2>Easy to use</h2>
        <p>Although hana is a fresh girl, she has a engineer's soul and think that engineers should be pragmatic. She could not understand something like "Desgin Language", so, hana-ui is just a easy-to-use <strong>React-UIKIT</strong>.</p>
      </div>
    }
  >
    <img
      className={'page-img'}
      src={config.overview.useful}
      alt={'intro'}
    />
  </MultiLang>,
  <MultiLang
    key={'rich'}
    className={cx('page', 'rich')}
    childrenAtPre
    cn={
      <div className={'page-content'}>
        <h2>生态丰富</h2>
        <p>
          hana利用花的三个状态的组件描述这个世界，它们分别是——种子、新芽、花，它们的复杂度层层递增，用于满足不同的工程场景。
          <br />
          经历了长期迭代，hana-ui正在一些场景有着良好表现，比如bilibili后台和一些活动页面。
        </p>
      </div>
    }
    en={
      <div className={'page-content'}>
        <h2>Rich components</h2>
        <p>hana use three grow stages of plant to describe this world: seeds, burgeon and flowers, they are useful for different scene.</p>
        <br />
        <p>Through many iterations, hana-ui works perfectly in many scene, like the <strong>Bilibili Activity Manager</strong> and some pages.</p>
      </div>
    }
  >
    <img
      className={'page-img'}
      src={config.overview.rich}
      alt={'intro'}
    />
  </MultiLang>,
  <MultiLang
    key={'understand'}
    className={cx('page', 'understand')}
    childrenAtPre
    cn={
      <div className={'page-content'}>
        <h2>开始了解它们吧</h2>
        <div>
          <p>
            <Link to={getUrl('guide', 'cn')}>使用向导</Link>
            <Link to={getUrl('document', 'cn')}>组件文档</Link>
          </p>
          <p>
            <a href={'https://github.com/hana-group'} target={'_blank'}>获取资源</a>
            <Link to={getUrl('contribution', 'cn')}>添砖加瓦</Link>
          </p>
        </div>
      </div>
    }
    en={
      <div className={'page-content'}>
        <h2>Let's start</h2>
        <div>
          <p>
            <Link to={getUrl('guide', 'en')}>Guide</Link>
            <Link to={getUrl('document', 'en')}>Document</Link>
          </p>
          <p>
            <a href={'https://github.com/hana-group'} target={'_blank'}>Resource</a>
            <Link to={getUrl('contribution', 'en')}>Contribution</Link>
          </p>
        </div>
      </div>
    }
  >
    <img
      className={'page-img'}
      src={config.overview.understand}
      alt={'intro'}
    />
  </MultiLang>
];

const colors = [
  // 'rgba(172, 238, 85, .3)',
  // 'rgba(230, 207, 230, .6)',
  // 'rgba(100, 149, 237, .3)',
  // 'rgba(245, 151, 191, .3)',
  // 'rgba(241, 220, 101, .3)',
  'rgba(255, 255, 255, 1)',
  'rgba(255, 255, 255, 1)',
  'rgba(255, 255, 255, 1)',
  'rgba(255, 255, 255, 1)',
  'rgba(255, 255, 255, 1)',
  'rgba(255, 255, 255, 1)'
];

export default class Overview extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  state = {
    page: 0,
    nextPage: 0,
    dir: 'next',
    switchDone: true,
    color: colors[0]
  };
  
  componentDidMount() {
    document.addEventListener('keydown', this.handlePressKey);
    document.addEventListener('mousewheel', this.handleMouseWheel);
    document.addEventListener('DOMMouseScroll', this.handleMouseWheel); // firefox
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlePressKey);
    document.removeEventListener('mousewheel', this.handleMouseWheel);
    document.removeEventListener('DOMMouseScroll', this.handleMouseWheel); // firefox
  }

  handleMouseWheel = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const {
      page,
      switchDone
    } = this.state;

    if (!switchDone) {
      return;
    }

    let nextPage = page;
    const max = pages.length - 1;

    let delta = 0;
    if (event.wheelDelta) {
      delta = event.wheelDelta;
    } else if (event.detail) {
      delta = -event.detail;
    }

    if (delta >= 100) {
      nextPage = page === 0 ? max : page - 1;
    } else if (delta <= -100) {
      nextPage = page === max ? 0 : page + 1;
    } else {
      return;
    }

    this.changePage(nextPage);
  }

  handlePressKey = (e) => {
    const {
      page,
      switchDone
    } = this.state;

    if (!switchDone) {
      return;
    }

    let nextPage = page;
    const max = pages.length - 1;

    switch (keyCodes[e.keyCode || e.which]) {
      case 'LEFT':
      case 'UP':
        nextPage = page === 0 ? max : page - 1;
        break;
      case 'RIGHT':
      case 'DOWN':
        nextPage = page === max ? 0 : page + 1;
        break;
      default:
        return;
    }

    this.changePage(nextPage);
  }

  changePage = (page) => {
    const diff = this.state.page - page;

    this.setState({
      switchDone: false,
      nextPage: page,
      dir: diff === -1 || diff === 5 ? 'next' : 'pre'
    });
  }

  render() {
    const {nextPage, dir} = this.state;

    return (
      <div className={'demo-overview'}>
        <FireFlies
          className={'demo-overview-flies'}
          color={this.state.color}
        />
        <CSSTransition
          classNames={`demo-overview-page-${dir}`}
          timeout={pageChangeDuration}
          in={this.state.switchDone}
          onExited={() => this.setState({page: nextPage, switchDone: true, color: colors[nextPage]})}
        >
          {pages[this.state.page]}
        </CSSTransition>
      </div>
    );
  }
}
