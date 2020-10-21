/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import InlineEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import Font from '@ckeditor/ckeditor5-font/src/font';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount';

class ClassicEditor extends ClassicEditorBase {}
class InlineEditor extends InlineEditorBase {}

const plugins = [
	Essentials,
	UploadAdapter,
	Alignment,
	Autoformat,
	Bold,
	Italic,
	Underline,
	Strikethrough,
	Code,
	Font,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	HorizontalLine,
	Image,
	ImageResize,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	LinkImage,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	TodoList,
	WordCount
];

const config = {
	/*ckfinder: {
		uploadUrl: 'http://localhost:3000/api/images/post',
	},*/
	heading: {
		options:[
			{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
			{ model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
			{ model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
			{ model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
			{ model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
			{ model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
			{ model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
		]
	},
	fontFamily: {
		options: [
			'default',
			'Roboto, sans-serif',
			'Open Sans, sans-serif'
		]
	},
	toolbar: {
		items: [
			/*'ckfinder',*/
			'heading',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'code',
			'link',
			'alignment',
			'|',
			'fontSize',
			'fontFamily',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'bulletedList',
			'numberedList',
			'todoList',
			'|',
			'indent',
			'outdent',
			'|',
			'imageUpload',
			'horizontalLine',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo'
		]
	},
	image: {
		resizeUnit: 'px',
		styles: [
			'alignLeft', 'alignCenter', 'alignRight'
		],
		resizeOptions: [
			{
				name: 'imageResize:original',
				label: 'Original',
				value: null
			},
			{
				name: 'imageResize:250',
				label: '250px',
				value: '250'
			},
			{
				name: 'imageResize:300',
				label: '300px',
				value: '300'
			},
			{
				name: 'imageResize:400',
				label: '400px',
				value: '400'
			}
		],
		toolbar: [
			'imageStyle:alignLeft',
			'imageStyle:alignCenter',
			'imageStyle:alignRight',
			'|',
			'imageResize',
			'|',
			'imageTextAlternative',
			'|',
			'linkImage'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};


// Plugins to include in the build.
ClassicEditor.builtinPlugins = plugins;
InlineEditor.builtinPlugins = plugins;

// Editor configuration.
ClassicEditor.defaultConfig = config;
InlineEditor.defaultConfig = config;

export default {
    ClassicEditor, InlineEditor
};