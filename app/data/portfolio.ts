import AndroidIcon from "@/app/components/common/AndroidIcon"
import CSSIcon from "@/app/components/common/CSSIcon"
import GithubIcon from "@/app/components/common/GithubIcon"
import HtmlIcon from "@/app/components/common/HtmlIcon"
import JavascriptIcon from "@/app/components/common/JavascriptIcon"
import MongoIcon from "@/app/components/common/MongoIcon"
import MySQLIcon from "@/app/components/common/MySQLIcon"
import { NextIcon } from "@/app/components/common/NextIcon"
import NodeJsIcon from "@/app/components/common/NodeJsIcon"
import ReactIcon from "@/app/components/common/ReactIcon"
import SpringBootIcon from "@/app/components/common/SpringBootIcon"
import TSIcon from "@/app/components/common/TSIcon"


export const navBarLink = [
    {
        "title":"About",
        "href":"#about"
    },
    {
        "title":"Projects",
        "href":"#projects"
    },
    {
        "title":"Skills",
        "href":"#skills"
    },
    {
        "title":"Contact",
        "href":"#contact"
    }
]

export const attachment = {
    "title":"Resume",
    "href":"/resume-path"
}

export const ABOUT_SECTION = {
    displayText:"기술을 효율로",
    name:"송영준",
    title:"프로그래머",
    description:"프런트엔드와 백엔드를 결합하여 역동적이고 반응성이 뛰어난 디지털 솔루션을 구축하는 엔드투엔드 웹 및 모바일 개발자가 되기위해 노력하고 있습니다.",
    greeting:'👋'
}

export const projects = [
    {
        title:"todolist",
        description:"간단하게 체크완료기능과 검색기능을 넣은 todolist입니다.  React를 빌드속도를 향상시키기 위해 개발툴로 vite를 사용했습니다. Redux로 상태 관리를 구현했습니다.",
        github_link:"",
        tech_stack:[ReactIcon,TSIcon,HtmlIcon,CSSIcon],
        images:[
            '/static/images/project1/1.png',
            '/static/images/project1/2.png',
            '/static/images/project1/3.png'
        ]
    },
    {
        title:"E-commerce 웹사이트(Erp 팀프로젝트)",
        description:"Next.js를 사용해 만든 커피원두 테마의 웹사이트입니다. 팀프로젝트의 관리자 페이지에서 사용자 페이지에 보여지는 부분을 간편하게 조작할 수 있는점을 중점적으로 보고 제작하였습니다.저는 팀프로젝트에서  상품 슬라이드, 회원가입,로그인, 상품 판매 상세페이지, 마이페이지, 결제 이후 자동연장 구독시스템 부분을 맡았습니다.현재 데이터 베이스 손실로 사이트를 닫았습니다.",
        github_link:"",
        tech_stack:[ReactIcon,TSIcon,HtmlIcon,CSSIcon,AndroidIcon],
        images: [
            '/static/images/project2/1.png',
            '/static/images/project2/2.png',
            '/static/images/project2/3.png',
            '/static/images/project2/4.png',
            '/static/images/project2/5.png',
            '/static/images/project2/6.png',
            '/static/images/project2/7.png',
        ]
    },
    {
        title:"Notion API/DB와 연동하여 개발한 블로그 준비사이트",
        description:"별도의 데이터베이스 서버 없이 Notion API/DB와 연동하여 개발 현재는 일단 개인 기록용 노션기록, 차후 커뮤니티기능(댓글,좋아요)추가 할 예정",
        github_link:"https://notion-blog-skhc.vercel.app/",
        tech_stack:[ReactIcon,TSIcon,HtmlIcon,CSSIcon,NodeJsIcon,MongoIcon],
        images:[
            '/static/images/project3/1.png',
            '/static/images/project3/2.png',
            '/static/images/project3/3.png'
        ]
    },
    {
        title:"포트폴리오 사이트",
        description:"현재 변경전 기존의 초기 포트폴리오 사이트입니다.",
        github_link:"",
        tech_stack:[ReactIcon,TSIcon,HtmlIcon,CSSIcon,SpringBootIcon,MySQLIcon],
        images:[
            '/static/images/project4/1.png',
            '/static/images/project4/2.png',
            '/static/images/project4/3.png',
        ]
    }
]

export const skills = [
    ReactIcon,TSIcon,HtmlIcon,CSSIcon,JavascriptIcon, SpringBootIcon,MongoIcon,NodeJsIcon, MySQLIcon,NextIcon 
]

export const contact = {
    "title":"Contact",
    "description":"email: clesaaaaaa@gmail.com",
    links:[
        {
            icon:GithubIcon,
            link:'https://github.com/'
        },
        
    ]
}