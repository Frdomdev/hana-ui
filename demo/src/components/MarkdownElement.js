/**
 * Author: ひまわり(dtysky<dtysky@outlook.com>)
 * Github: https://github.com/dtysky
 * Created: 16/12/29
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import cx from 'classnames';
import highlightjs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import bash from 'highlight.js/lib/languages/bash';

import './markdown.scss';
import './github.css';

highlightjs.registerLanguage('javascript', javascript);
highlightjs.registerLanguage('bash', bash);

export default class MarkdownElement extends Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    text: PropTypes.string,
    children: PropTypes.node
  };

  static defaultProps = {
    text: '',
    className: 'demo-markdown-element'
  };

  componentWillMount() {
    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      highlight: (code, lang) =>
        highlightjs.highlight(lang, code).value
    });
  }

  render() {
    const {
      style,
      className,
      text,
      children
    } = this.props;

    /* eslint-disable react/no-danger */
    return (
      <div className={cx('markdown-element', className)}>
        <div
          style={Object.assign({}, style)}
          className={cx('markdown-body')}
        >
          <div dangerouslySetInnerHTML={{__html: marked(text)}} />
          {children}
        </div>
      </div>
    );
    /* eslint-enable */
  }
}
