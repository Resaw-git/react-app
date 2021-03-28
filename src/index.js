import * as $ from 'jquery'
import Post from '@models/Post'
//import json from './assets/json.json'
//import xml from './assets/data.xml'
//import csv from './assets/data.csv'
import './babel'
import './styles/styles.css'
import Image from '@/assets/image'
import './styles/less.less'
import './styles/scss.scss'

const post = new Post('Webpack Post Title', Image)

$('pre').addClass('code').html(post.toString())

//console.log('Post to String:', post.toString())

//console.log('JSON:', json)
//console.log('XML:', xml)
//console.log('CSV:', csv)