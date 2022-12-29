reearth.ui.show(`
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto Sans">
<style>

  html,
  body {
    margin: 0;
    height: auto;
    overflow:hidden;
    width: 312px;
    max-width: 312px;
  }

  #wrapper {
    display: block;
    gap: 20px;
    background: #171618;
    overflow: hidden;
    max-width: 312px;
    max-height: 615px;
    border-radius: 4px;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 1px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #28272f;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #171618;
    overflow: hidden;
    max-width: 312px;
    max-height: 615px;
  }

  .section .extendedh, .extendedh { width: 46px; cursor: pointer;}
  .section .extendedv, .extendedv { height: 46px; }
  #wrapper { box-sizing: border-box; }
  .extendedh body, .extendedh #wrapper { width: 46px; border-radius: 4px;}
  .extendedv body, .extendedv #wrapper { max-height: 317px; height: 46px;}

  .height-46 {
    height:46px;
    width: 46px;
    border-radius: 4px;
  }

  div#form-wrapper {
    margin-bottom: 18px;
    margin-left: 15px;
    margin-right: 15px;
    max-width:312px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #171618;
  }
  .section .extendedh, .extendedh { width: 46px; cursor: pointer;}
  .section .extendedv, .extendedv { height: 46px; }
  #wrapper { box-sizing: border-box; }
  .extendedh body, .extendedh #wrapper { width: 46px; border-radius: 4px;}
  .extendedv body, .extendedv #wrapper { max-height: 317px; height: 46px;}

  .height-46 {
    height:46px;
    width: 46px;
    border-radius: 4px;
  }

  div#form-wrapper {
    margin-bottom: 18px;
    margin-left: 15px;
    margin-right: 15px;
    max-width:312px;
  }
  p,
  h3,
  span,
  label {
    color: #bfbfbf;
  }
  #title {
    font-family: "Roboto" !important;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    margin: 0px;
    height: 30px;
    background: #171618;
    border-radius: 4px 4px 0px 0px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    display: flex;
    justify-content: start;
    align-items: center;
    cursor: pointer;
    padding-bottom: 16px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
  }

  p.title-p {
    margin-top: 15px;
    margin-left: 5px;
  }

  span#logo {
    position: relative;
    top: 4px;
    margin-right: 8px;
  }
  .group-title {
    width: 100%;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    margin-bottom: 12px;
    margin-top: 12px;
  }
  .group-title p {
    margin: 0px 8px;
  }
  .input-title {
    display: block;
    overflow: hidden;
    font-size: 12px;
    line-height: 16px;
    padding: 8px 0px 8px 0px;
    width: 100px;
    margin: 0px;
    float: left;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
  }
  input[type="number"], input[type="text"],
  select {
    width: calc(100% - 120px);
    background: #171618;
    border: 1px solid #4a4a4a;
    height: 27px;
    color: #c7c5c5;
    font-size: 12px;
    padding-left: 7px;
    float: right;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
  /* Chrome, Safari, Edge, Opera */
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
  *:focus {
    outline: none;
  }
  
  .guide {
    display: block;
    width: 100%;
    font-size: 12px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    margin-bottom: 10px;
  }
  #clean-all-fields {
    font-family: "Roboto" !important;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #3b3cd0;
    border: solid 1px #3b3cd0;
    background: transparent;
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.016);
    border-radius: 4px;
    padding: 5px;
    margin-right: 7px;
  }
  #clean-all-fields,
  #generate-model, #download {
    cursor: pointer;
  }
  
  #clean-all-fields,
  #generate-model {
    width: 149px;
    height: 30px;
    font-family: "Roboto" !important;
    font-style: normal;
    font-weight: 400;
  }
  #generate-model,
  .blue-btn {
    font-family: "Roboto" !important;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #ffffff;
    background: #3b3cd0;
    border: solid 1px #3b3cd0;
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.016);
    border-radius: 4px;
    padding: 5px;
    height: 30px;
    width: 100%;
    cursor: pointer;
  }
  
  button {
    display: inline-block;
  }
   #export {
    margin-bottom: 12px;
    margin-top: 5px;
  } 
  .separator {
    display: flex;
    align-items: center;
  }
  
  .separator .line {
    height: 1px;
    flex: 1;
    background-color: #4a4a4a;
  }
  
  .separator h2 {
    padding: 0 1px;
  }
  
  #btn-wrapper {
    margin-top: 10px;
  }
  
  .form-group {
    margin: 0;
    position: static;
    display: block;
    overflow: hidden;
    height: 37px;
    width: 100%;
  }
  .form-group-1 {
    margin: 0;
    position: static;
    display: block;
    overflow: hidden;
  }
  
  span.maru {
    position: relative;
    left: 145px;
    top: 8px;
    font-size: 12px;
    color: #4a4a4a;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
  }
  
  span.arrow {
    position: relative;
    left: 190px;
    top: -25px;
    font-size: 20px;
    color: #4a4a4a;
  }
  
  select {
    appearance: none;
  }
  
  select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
  
  #general .form-group {
    margin-bottom: 5px;
  }
  
  span#close:hover {
    cursor: pointer;
  }
  
  .down-ar:before {
    content: "";
    float: right;
    color: #595959;
    position: relative;
    top: -27px;
    right: 7px;
  }
  
  div.viewport-body {
      padding: 0px 6px;
  }
  
  .viewport-header {
    width: 100%;
    display: flex;
    justify-items: stretch;
    justify-content: space-between;
    border-bottom: 1px solid #595959;
      margin-bottom: 8px;
  }
  
  span.remove-path {
      margin-top: 6px;
      margin-right: 10px;
      cursor: pointer;
  }
  
  span.path-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin: 4px 2px;
    height: 22px;
    padding-left: 8px;
  }
  
#close {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
    border: 2px solid transparent;
    border-radius: 40px;
    left: 175px;
    top: 1px;
    color: #595959;
}

  #close::after,
  #close::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 16px;
    height: 2px;
    background: currentColor;
    transform: rotate(45deg);
    border-radius: 5px;
    top: 8px;
    left: 1px;
  }
  #close::after {
    transform: rotate(-45deg);
  }
  
  span.down-ar {
    display: block;
    overflow: hidden;
    position: relative;
    top: 1px;
    left: 165px;
    transform: rotate(0deg);
  }
  
  @media only screen (max-width: 1440px) {
	  span.down-ar {
      top: 0px !important;
    }
  }
  
  #closed-logo {
    display: none;
    overflow: hidden;
    width: 21px;
    height: 21px;
    cursor: pointer;
    margin-top: 11px;
    margin-left: 12px;
    background: #181618;
    padding: 5px;
    border-radius: 5px;
  }
  
  p#guide-txt {
    color: #4A4A4A;
  }
  
  .guide-panel {
    margin-top: 12px;
    width: 100%;
    min-height: 25px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    display: block;
    text-align: center;
    color: #4A4A4A !important;
    margin: auto;
  }
  
  .viewport-wrapper {
    overflow-y: scroll;
    max-height: 365px;
    display: block;
    scrollbar-width: thin;
  }

  div#viewport-item {
    border: 1px solid #595959;
    margin-bottom: 10px;
    border-radius: 4px;
  }

  input[type="color"] {
  -webkit-appearance: none;
  border: none;
  width: 30px;
  height: 30px;
  margin-left: 10px;
  padding: 0px;
  }

  input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  input[type="color"]::-webkit-color-swatch {
    border: none;
  }

  input.stroke-color {
    width: calc(100% - 152px);
  }

  form#add-viewport-form {
    margin-bottom: 0px; 
  }

  .viewport-item {
    display: none;
    border-radius: 4px;
    cursor: pointer;
  }

  #viewport-wrapper .viewport-item {
    display: block;
    border: 1px solid #4a4a4a;
    margin-bottom: 10px;
  }

  .showDistanceistance {
    color: white;
    display: block;
  }

  .viewport-item:hover {
    background: rgba(190, 188, 243,0.1);
  }

  .not-allow {
    cursor: not-allowed;
    background: #958f8f;
    border: none;
  }

  span.m {
      width: 12px;
      height: 16px;
      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      color: #4A4A4A;
      top: -26px;
      left: 143px;
  }
  .child-form-gr {
    display: block;
    width: calc(100% / 2);
    float: left;
    position: initial;
  }
  .child-form-gr .input-title {
    width: auto;
    margin-right: 13px;
  }
  input[type="number"].input-heading {
    width: calc(100% - 60px);
    float: left;
  }
  span.maru-1 {
    font-size: 5px;
    top: 3px;
    position: relative;
    right: calc(50% - 49px);
  }
  span.maru-2 {
    font-size: 5px;
    top: 3px;
    position: relative;
    left: calc(50% + 17px);
  }
  .child-form-gr:last-child .input-title {
    margin-left: 5px;
    margin-right: 5px;
  }
  .child-form-gr:last-child .input-heading {
    width: calc(100% - 50px);
    float: right;
    padding-right: 0px;
  }

  .slidecontainer {
    width: 100%;
  }
  
  .slider {
    -webkit-appearance: none;
    width: 97%;
    height: 3px;
    border-radius: 20px;
    background: #4a4a4a;
    outline: none;
    margin-top: 10px;
    -webkit-transition: .2s;
    transition: opacity .2s;
  }
  
  .slider:hover {
    opacity: 1;
  }
  
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 20px;
    background: #ffffff;
    cursor: pointer;
    opacity: 0.7;
  }
  
  .slider::-moz-range-thumb {
    width: 15px;
    height: 15px;
    background: #ffffff;
    border-radius: 20px;
    cursor: pointer;
    opacity: 0.7;
  }
  .tranparent-label {
    width: 110px;
  }
  .transparent-wrapper {
    float: right;
    width: calc(100% - 145px);
  }
  span#f {
    font-size: 13px;
    position: relative;
    top: -4px;
  }
  
  .transparented-color {
    width: 30px;
    height: 30px;
    background: #ffffff;
    float: left;
  }
  #viewport-wrapper .viewport-item.hide {
    display: none;
  }
  </style>
    <div class="height-46" id="wrapper">
      <h3 id="title">
        <span id="logo">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1361_11324)">
            <mask id="path-1-inside-1_1361_11324" fill="white">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5966 15.8866C11.979 14.7215 13.6199 12.274 13.6199 9.44329C13.6199 6.61257 11.9791 4.16508 9.59666 3C2.75003 3.25578 0 9.444 0 9.444C0 9.444 2.75001 15.6308 9.5966 15.8866Z"/>
            </mask>
            <path d="M9.5966 15.8866L9.54807 17.1857L9.87437 17.1979L10.1677 17.0544L9.5966 15.8866ZM9.59666 3L10.1678 1.83217L9.87443 1.68872L9.54813 1.70091L9.59666 3ZM0 9.444L-1.18798 8.91607L-1.42261 9.44406L-1.18793 9.97203L0 9.444ZM12.3199 9.44329C12.3199 11.7587 10.979 13.7635 9.0255 14.7188L10.1677 17.0544C12.9791 15.6796 14.9199 12.7893 14.9199 9.44329H12.3199ZM9.02555 4.16783C10.979 5.12314 12.3199 7.12785 12.3199 9.44329H14.9199C14.9199 6.09728 12.9791 3.20702 10.1678 1.83217L9.02555 4.16783ZM9.54813 1.70091C5.70396 1.84452 3.00753 3.66341 1.30116 5.40925C0.450345 6.27973 -0.163243 7.1396 -0.565978 7.7845C-0.767935 8.10789 -0.918585 8.37998 -1.02095 8.57613C-1.07218 8.67429 -1.11146 8.7537 -1.13914 8.81131C-1.15299 8.84012 -1.16395 8.8635 -1.17207 8.88108C-1.17613 8.88987 -1.17948 8.89721 -1.18213 8.90306C-1.18346 8.90598 -1.18461 8.90853 -1.18558 8.9107C-1.18607 8.91179 -1.18651 8.91278 -1.18691 8.91367C-1.18711 8.91412 -1.18738 8.91472 -1.18747 8.91494C-1.18773 8.91552 -1.18798 8.91607 0 9.444C1.18798 9.97193 1.18775 9.97244 1.18754 9.97292C1.18748 9.97305 1.18728 9.97351 1.18716 9.97376C1.18693 9.97428 1.18674 9.97471 1.18659 9.97504C1.18629 9.97572 1.18615 9.97602 1.18617 9.97597C1.18622 9.97586 1.18692 9.97433 1.18827 9.9714C1.19097 9.96555 1.19629 9.95415 1.20425 9.93758C1.2202 9.90441 1.24669 9.85062 1.28403 9.77907C1.3588 9.6358 1.47648 9.42244 1.63932 9.16169C1.96617 8.63831 2.468 7.93513 3.16053 7.22659C4.54083 5.81437 6.64272 4.41126 9.64519 4.29909L9.54813 1.70091ZM0 9.444C-1.18793 9.97203 -1.18769 9.97258 -1.18743 9.97316C-1.18733 9.97338 -1.18707 9.97398 -1.18687 9.97442C-1.18647 9.97532 -1.18602 9.97631 -1.18554 9.97739C-1.18456 9.97956 -1.18341 9.98211 -1.18209 9.98504C-1.17944 9.99088 -1.17609 9.99822 -1.17203 10.007C-1.16391 10.0246 -1.15294 10.048 -1.1391 10.0768C-1.11141 10.1344 -1.07213 10.2138 -1.0209 10.3119C-0.918529 10.508 -0.767875 10.7801 -0.565914 11.1034C-0.163171 11.7482 0.450424 12.6079 1.30124 13.4782C3.00763 15.2236 5.70403 17.0421 9.54807 17.1857L9.64513 14.5875C6.64259 14.4753 4.54068 13.0725 3.16042 11.6606C2.46791 10.9522 1.96609 10.2492 1.63925 9.72599C1.47642 9.4653 1.35874 9.252 1.28397 9.10877C1.24664 9.03724 1.22015 8.98347 1.20421 8.95031C1.19624 8.93374 1.19093 8.92235 1.18822 8.9165C1.18687 8.91357 1.18617 8.91204 1.18613 8.91193C1.1861 8.91188 1.18624 8.91219 1.18654 8.91286C1.18669 8.91319 1.18689 8.91362 1.18712 8.91414C1.18723 8.9144 1.18744 8.91486 1.1875 8.91499C1.18771 8.91547 1.18793 8.91597 0 9.444Z" fill="#BFBFBF" mask="url(#path-1-inside-1_1361_11324)"/>
            <path d="M10.9804 5.99304L11.5098 5.61588C11.4227 5.49369 11.2961 5.40537 11.1513 5.36591L10.9804 5.99304ZM11.4738 12.7352L11.7349 13.3305C11.872 13.2703 11.9842 13.1647 12.0524 13.0314L11.4738 12.7352ZM11.1513 5.36591C10.7951 5.26882 10.4209 5.21719 10.0356 5.21719V6.51719C10.3043 6.51719 10.5636 6.55315 10.8095 6.62016L11.1513 5.36591ZM10.0356 5.21719C7.69711 5.21719 5.80142 7.11288 5.80142 9.45133H7.10142C7.10142 7.83085 8.41508 6.51719 10.0356 6.51719V5.21719ZM5.80142 9.45133C5.80142 11.7898 7.69711 13.6855 10.0356 13.6855V12.3855C8.41508 12.3855 7.10142 11.0718 7.10142 9.45133H5.80142ZM10.0356 13.6855C10.6387 13.6855 11.2139 13.559 11.7349 13.3305L11.2127 12.14C10.8532 12.2976 10.4555 12.3855 10.0356 12.3855V13.6855ZM12.0524 13.0314C12.5536 12.0524 12.836 10.9432 12.836 9.77004H11.536C11.536 10.7325 11.3047 11.6391 10.8952 12.439L12.0524 13.0314ZM12.836 9.77004C12.836 8.22254 12.3447 6.78784 11.5098 5.61588L10.451 6.37019C11.1342 7.32919 11.536 8.50173 11.536 9.77004H12.836Z" fill="#BFBFBF"/>
            <path d="M12 3L16 1" stroke="#BFBFBF" stroke-width="1.3" stroke-linecap="round"/>
            <path d="M12 16L15 19" stroke="#BFBFBF" stroke-width="1.3" stroke-linecap="round"/>
            <path d="M15 9.5L19 9.5" stroke="#BFBFBF" stroke-width="1.3" stroke-linecap="round"/>
            </g>
            <defs>
            <clipPath id="clip0_1361_11324">
            <rect width="20" height="20" fill="white"/>
            </clipPath>
            </defs>
            </svg>  
          </span><p class="title-p"> ビューポート </p> <span id="close" data-stt="0"></span>
        </h3>
      <form method="POST" id="add-viewport-form">
        <div id="form-wrapper">
          <input type="button" class="blue-btn" id="add-viewport" value="ビューポートの追加">
          <div class="guide-panel" id="guide-panel">
            <p id="guide-txt">上のボタンをクリック後、 
            マップをクリックしてビューポートを描画します。</p>
          </div>
          <div class="viewport-wrapper" id="viewport-wrapper">
            <div id="line"></div>
          </div>
          <div class="group-div">
            <span id="choose-marker" class="group-title separator"><div
                class="line"></div>
              <p>エクスポーター設定</p>
              <div class="line"></div>
            </span>
            <div class="form-group-1">
              <input type="button" class="blue-btn" id="export" value="エクスポート CZML">
            </div>
            </div>
          </div>
        </div>
      </form>
      <div class="viewport-item hide" id="viewport-item-temp" onclick="selectedViewport(this)">
        <div class="viewport-header">
          <span class="path-title"  title="選択">ビューポート&nbsp;<span class="viewportItemID"></span><span class="showDistance"></span></span> 
          <span class="remove-path" onclick="removeViewport(this)"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4998 3.5L2.49976 3.50001" stroke="#BFBFBF" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.5 6.5V10.5" stroke="#BFBFBF" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.5 6.5V10.5" stroke="#BFBFBF" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.5 3.5V13C12.5 13.1326 12.4473 13.2598 12.3536 13.3536C12.2598 13.4473 12.1326 13.5 12 13.5H4C3.86739 13.5 3.74021 13.4473 3.64645 13.3536C3.55268 13.2598 3.5 13.1326 3.5 13V3.5" stroke="#BFBFBF" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.5 3.5V2.5C10.5 2.23478 10.3946 1.98043 10.2071 1.79289C10.0196 1.60536 9.76522 1.5 9.5 1.5H6.5C6.23478 1.5 5.98043 1.60536 5.79289 1.79289C5.60536 1.98043 5.5 2.23478 5.5 2.5V3.5" stroke="#BFBFBF" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </div>
        <div class="viewport-body">
          <div class="form-group">
            <label class="input-title">距離</label>
            <input type="number" class="vp-distance" id="vp-distance" onchange="changeInput(this)" name="viewport[temp][vp-distance]" value="10" placeholder="0" min="0"/>
            <span class="maru m">m</span>
          </div>
          <div class="form-group">
            <label class="input-title">高さ</label>
            <input type="number" class="vp-height" id="vp-height" onchange="changeInput(this)" name="viewport[temp][vp-height]" value="1.6" placeholder="0" min="1"/>
            <span class="maru m">m</span>
          </div>
          <div class="form-group">
          <div class="child-form-gr">
            <label class="input-title">回転</label>
            <input type="number" class="vp-heading input-heading" onchange="changeInput(this)" id="vp-heading" name="viewport[temp][vp-heading]" 
              value="0" placeholder="0" min="0"/>
            <span class="maru-1">◯</span>
          </div>
            <div class="child-form-gr">
              <label class="input-title">傾き</label>
              <input type="number" class="vp-pitch input-heading" onchange="changeInput(this)" id="vp-pitch" name="viewport[temp][vp-pitch]" 
                value="0" placeholder="0" min="0"/>
              <span class="maru-2">◯</span>
            </div>
          </div>
          <div class="form-group">
            <label class="input-title">色</label>
            <input type="color" class="color" value="#FFFFFF" id="color-temp" name="viewport[temp][color]">
            <input type="text" class="vp-color stroke-color" id="" name="viewport[temp][strcolor]" value="#ffffff"/>
          </div>
          <div class="form-group">
            <label class="input-title tranparent-label">透過度</label> 
            <div class="transparented-color"></div>
            <div class="transparent-wrapper">
              <input type="range" oninput="showTranparentColorValue(this)" class="transparent-range slider" min="1" max="100" value="100" id="transparent-range" name="viewport[temp][transparent]"/>
            </div>
          </div>
          <div>
            <input type="hidden" class="layer-viewport" id="layer-viewport-temp" name="viewport[temp][layerPathId]" value="" data-position="" data-layer-id="" dataーdistance=""/>
          </div>
        </div>
      </div>


<script src='https://unpkg.com/@turf/turf@6/turf.min.js'></script>
<script>

  // ------------------- Clone Viewport Item Function --------------------------- //
  // ----------------------------------------------------------------------- //
  let inCreatingStt = false;
  let deletedStt = false;
  let viewPortWrapper = document.getElementById("viewport-wrapper");
    //  Create Viewport Item
    function createViewportItem() {
      let addViewportBtn = document.querySelector("#add-viewport");
      let appendData = "";
      addViewportBtn.addEventListener("click", function() {
        event.preventDefault();
        inCreatingStt = true;
        deletedStt = false;
        let countViewportItem = document.querySelectorAll('.viewport-item').length;
        let viewportNumber = countViewportItem + 1;
        let viewportItem = document.querySelector("#viewport-item-temp");
        viewPortWrapper.appendChild(viewportItem.cloneNode(true));
        handleGeneratingNewViewportID();
        handleToDisplayColorHex();
        focusOnNewViewportItem();
        reUpdateIframe();
      });
    }
    // ---- Close create Viewport Item ---------- //

    // -------------------  ReUpdate Iframe --------------------------- //
    function reUpdateIframe() {
      heightWp = wapperElm.offsetHeight;
      let expanded = false;
      parent.postMessage({ type: "resize", expanded, heightWp }, "*");

    }
    // -------------------Close ReUpdate Iframe-------------------------------- //
    
    var allPathsArr = [];
    // Handling Deleting Viewport Item
    function removeViewport(item) {
      if(inCreatingStt) {
        inCreatingStt = false;
        let viewPortEle = document.getElementById('viewport-item-'+ viewportCount());
        viewPortEle.remove();
      }
      setTimeout(function(){
        let removeViewportLayerId = item.closest(".viewport-item")
                        .querySelector(".layer-viewport")
                        .getAttribute("data-layer-id");
        item.closest(".viewport-item").remove();
        handleGeneratingNewViewportID();
        deletedStt = true;
        parent.postMessage({ type: "removeModel", removeViewportLayerId}, "*");
      }, 200);
    }
    // ---- Close Handle Handling Deleting Viewport Item ---------- //


    // Handle re-generating Viewport ID after deleted Viewport Item
    function handleGeneratingNewViewportID() {
      let allviewportItemIDs = document.querySelectorAll(".viewport-item");
      let total = allviewportItemIDs.length;
      allviewportItemIDs.forEach(function(viewportItem, ind) {
        let viewportId = ind + 1;
        let viewPortItemElm = viewportItem.querySelector(".viewportItemID");
        viewPortItemElm.textContent = viewportId;
        if (ind + 1 < total) {
          let vpDistanceElm = viewportItem.querySelector(".vp-distance");
          let vpHeadingElm = viewportItem.querySelector(".vp-heading");
          let vpPitchElm = viewportItem.querySelector(".vp-pitch");
          let colorElm = viewportItem.querySelector(".color");
          let layerViewport = viewportItem.querySelector(".layer-viewport");

          viewportItem.setAttribute("id", "viewport-item-" + viewportId);
          viewportItem.setAttribute("data-index", viewportId);

          vpDistanceElm.setAttribute("id", "vp-distance-" + viewportId);
          vpDistanceElm.setAttribute( "name", "viewport[" + viewportId +"][vp-distance]");

          vpHeadingElm.setAttribute("id", "vp-heading-" + viewportId);
          vpHeadingElm.setAttribute( "name", "viewport[" + viewportId +"][vp-heading]");

          vpPitchElm.setAttribute("id", "vp-pitch-" + viewportId);
          vpPitchElm.setAttribute( "name", "viewport[" + viewportId +"][vp-pitch]");

          layerViewport.setAttribute("id", "layer-viewport-" + viewportId);
          layerViewport.setAttribute( "name", "viewport[" + viewportId +"][layer-viewport-" + viewportId + "]");

          colorElm.setAttribute("id", "color-" + viewportId);
          colorElm.setAttribute( "name", "viewport[" + viewportId +"][color]");
        }
      });
    }    
    // ---- Close Handle re-generating Viewport ID after deleted Path Item ---------- //
    
    // Handle to get color hex from color picker
    function handleToDisplayColorHex() {
      let colorPickers = document.querySelectorAll('.color');
      colorPickers.forEach(function(colorPicker, ind) {
        colorPicker.addEventListener("change", function() {
          event.preventDefault();
          let viewportItem = colorPicker.closest(".viewport-item");
          let transparentedColor = viewportItem.querySelector(".transparented-color");
          viewportItem.querySelector(".vp-color").setAttribute("value", event.target.value);
          transparentedColor.style.background = event.target.value;
          colorPicker.setAttribute("value", event.target.value);
          createViewport(viewportItem, false, false, cesium);
         });
      });
    }  
    // ---- Close Handle to get color hex from color picker ---------- //

  
  // ------------------------------------------------------------------------------ //
  // ------------------- Close Clone Viewport Item Function--------------------------- //


  // ---------------------------- Handle Formdata --------------------------- //
  let exportBtn = document.getElementById("export");
  exportBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let czmlData = createCzmlData();
    if(czmlData === false) {
      alert("No data to export");
    } else {
      downloadObjectAsJson(czmlData, "download");
    }
  });

  // Download CZML file
  function downloadObjectAsJson(exportObj, exportName) {
    var dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".czml");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }


  // Document Ready functions
  handleToDisplayColorHex();
  createViewportItem();
  // Close Document Readdy funtions

  // ---------------------------- Handle Javascript --------------------------- //
  
  let layerArr;
  let isEditState = false;
  let selectedEditPathElm;

  // Create New Viewport 
  function focusOnNewViewportItem() {
    isEditState = false;
    changeBackgroundToOriginal();
    //document.getElementById("guide-panel").style.display = 'none';
    document.getElementById("add-viewport").style.marginBottom = '10px';
    document.getElementById("viewport-item-"+ viewportCount() +"").style.background = 'rgba(190, 188, 243,0.1)';
    allowCreateNewViewportOrNot();
  }

  // Count the number of Viewports
  function viewportCount() {
    return document.querySelectorAll('.viewport-item').length - 1;
  }


  addEventListener("message", e => {
    if (e.source !== parent) return;
    let property;
    let modelUrl = "";
    let createdLayerId = e.data.createdLayerId;
    if (isEditState == false && createdLayerId && e.data.type == "showModel") {
      document.getElementById('viewport-item-'+ viewportCount()).querySelector(".layer-viewport").setAttribute("data-layer-id", createdLayerId );
    }
    cesium = e.source.Cesium;
    reearth = e.source.reearth
    if (e.data.type === 'mousedata' && e.data.payload.lng && e.data.payload.lat) {
      if(!deletedStt) {
        let viewPortEle;
        if (e.data.widget && e.data.widget.property.hasOwnProperty('settingFileBlock') && e.data.widget.property.settingFileBlock.settingFile) {
          modelUrl = e.data.widget.property.settingFileBlock.settingFile;
        }
        if(viewportCount() > 0) {
          // Edit Viewport
          if (isEditState == true) { 
            viewPortEle = selectedEditPathElm;
            createViewport(viewPortEle, false, modelUrl, cesium);
          } else {
            // Create new viewport
            viewPortEle = document.getElementById('viewport-item-'+ viewportCount());
            let layerPosition = viewPortEle.querySelector(".layer-viewport").getAttribute("data-position");
            if(layerPosition) {
              createViewport(viewPortEle, false, modelUrl, cesium);
            } else {
              layerPosition = [e.data.payload.lng, e.data.payload.lat, 10000];
              createViewport(viewPortEle, layerPosition, modelUrl, cesium);
            }
            if(inCreatingStt === true) {
              viewPortEle.classList.remove("hide");
              inCreatingStt = false;
              reUpdateIframe();
            } 
          }
          // Add new point into Viewport
          allowCreateNewViewportOrNot();
        }
      }
    }
  });

  function handleViewportOnchange() {
    let viewportInputs = document.querySelectorAll('.vp-distance, .vp-heading, .vp-pitch');
    viewportInputs.forEach(function(viewportInput, ind) {
      viewportInput.addEventListener("change", function() {
        event.preventDefault();
        let viewportItem = viewportInput.closest(".viewport-item");
        createViewport(viewportItem, false, false, cesium);
       });
    });
  }
  function selectedViewport(item){
    let modelLayerId = item.querySelector(".layer-viewport").getAttribute("data-layer-id");
    if(inCreatingStt) {
      inCreatingStt = false;
      let viewPortEle = document.getElementById('viewport-item-'+ viewportCount());
      viewPortEle.remove();
    }

    if(modelLayerId !== "") {
      isEditState = true;
    } else {
      isEditState = false;
    }
    selectedEditPathElm = item;
    changeBackgroundToOriginal();
    item.style.background = 'rgba(190, 188, 243,0.1)';
    allowCreateNewViewportOrNot();
  }

  // Check for disable new Viewport button
  function allowCreateNewViewportOrNot() {
    if (viewportCount() > 0 ) {
      let newViewportInput = document.getElementById("viewport-item-"+ viewportCount() +"")                    
                      .closest(".viewport-item").querySelector(".layer-viewport")
                      .getAttribute("data-position");
                      
     // Not allow to click new Viewport button when not entering data of previous path
      if (newViewportInput === "") {
        document.getElementById("add-viewport").classList.add("not-allow");
        document.getElementById("add-viewport").disabled = true;
      } else {
        //Allow click new Viewport button
        document.getElementById("add-viewport").classList.remove("not-allow");
        document.getElementById("add-viewport").disabled = false;
      }
    } else {
      //Allow click new Viewport button
      document.getElementById("add-viewport").classList.remove("not-allow");
      document.getElementById("add-viewport").disabled = false;
    }
  }



  //convert HEX color code to RGBA format
  function convertHex(hexCode, opacity = 100){
    var hex = hexCode.replace('#', '');
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    var r = parseInt(hex.substring(0,2), 16),
        g = parseInt(hex.substring(2,4), 16),
        b = parseInt(hex.substring(4,6), 16);
    let rbga = new Array();
      rbga.push(r);
      rbga.push(g);
      rbga.push(b);
      rbga.push(opacity);
      return rbga;
  }

  // Update viewport on earth when change width 
  function changeInput(item) {
    createViewport(item.closest(".viewport-item"), false, false, cesium);
  }
  var cesium;
  // Each Viewport is a layer
  function createViewport(viewPortEle, layerPosition, modelUrl, cesium) {
    let temp = [];
    let line;
    let vpColor = viewPortEle.querySelector(".color").value || "#ffffff";
    let vpDistance = viewPortEle.querySelector(".vp-distance").value || 1;
    let vpTransparent = viewPortEle.querySelector(".transparent-range").value || 1;
    let vpHeading = viewPortEle.querySelector(".vp-heading").value || 1;
    let vpPitch = viewPortEle.querySelector(".vp-pitch").value || 1 ;
    let vpPosition = viewPortEle.querySelector(".layer-viewport").getAttribute("data-position");
    let vpModelUrl = viewPortEle.querySelector(".layer-viewport").getAttribute("data-modelUrl");
    let vpHeight = viewPortEle.querySelector(".vp-height").value || 1 ;

    //Add 90 to set North as default
    vpHeadingNorth=Number(vpHeading)+90;
    let vpHeadingRadians = cesium.Math.toRadians(vpHeadingNorth);
    let vpPitchRadians = cesium.Math.toRadians(-(Number(vpPitch)));
    let hpr = new cesium.HeadingPitchRoll(vpHeadingRadians, vpPitchRadians, 0);
    if(layerPosition === false) {
      layerPosition = vpPosition.split(",");
      layerPosition[2] = vpHeight;
    } else {
      layerPosition.splice(2, 1, vpHeight);
    }
    if(modelUrl === false) {
      modelUrl = vpModelUrl;
    }
    let billboardPosition = layerPosition;
    billboardPosition[2] = vpHeight;

    let layerPositionCartesian = cesium.Cartesian3.fromDegrees(layerPosition[0], layerPosition[1], layerPosition[2]);
    let billboardPositionCartesian = cesium.Cartesian3.fromDegrees(billboardPosition[0], billboardPosition[1], billboardPosition[2]);
    billboardPositionCartesian = Object.values(billboardPositionCartesian);
    let orientation = cesium.Transforms.headingPitchRollQuaternion(layerPositionCartesian, hpr);
    let vpIndex = viewPortEle.getAttribute("data-index");
    let modelLayerId = viewPortEle.querySelector(".layer-viewport").getAttribute("data-layer-id");
    let czmlData = [
      {
        id: "document",
        name: "Viewports",
        version: "1.0",
      }
    ];
    
    // refresh
    reearth.layers.hide(modelLayerId, {
      default: {
        url: [],
      },
    });

    reearth.layers.overrideProperty(modelLayerId, {
      default: {
        url: [],
      },
    });

    // Add each marker data into czml
    czmlData.push(
      {
        id: vpIndex,
        name: "Viewport" + " " + vpIndex,
        position: {
          cartographicDegrees: layerPosition,
        },
        orientation: {
          unitQuaternion: [ orientation.x, orientation.y, orientation.z, orientation.w ]
        },
        model: {
          uri: "https://eukarya-inc.github.io/reearth-plugin-viewport/src/viewport.glb",
          gltf: "https://eukarya-inc.github.io/reearth-plugin-viewport/src/viewport.glb",
          scale: vpDistance,
          maximumScale: 20000,
          color:  { "rgba" : convertHex(vpColor,(Number(vpTransparent)*255/100)) },
          colorBlendMode:"REPLACE",
          colorBlendAmount: 0.5,
          heightReference: "RELATIVE_TO_GROUND",
        },
      }
    );
    
    czmlData.push(
      {
        id: "Icon" + vpIndex,
        name: "ViewportIcon" + " " + vpIndex,
        billboard: {
          image: "https://eukarya-inc.github.io/reearth-plugin-viewport/src/viewport-icon.png",
          heightReference: "RELATIVE_TO_GROUND",
        },
        position: {
          cartesian: billboardPositionCartesian,
        },
      }
    );

   
    viewPortEle.querySelector(".layer-viewport").setAttribute("data-position", layerPosition);
    viewPortEle.querySelector(".layer-viewport").setAttribute("data-modelUrl", modelUrl);
    viewPortEle.querySelector(".layer-viewport").setAttribute("data-distance", vpDistance);
    parent.postMessage({type: "showModel", modelLayerId, czmlData}, "*");
  }

  // change background color to original
  function changeBackgroundToOriginal() {
    let elements = document.getElementsByClassName("viewport-item");   
    for(let i = 0; i < elements.length; i++){
      if (elements[i].getAttribute("id") != "viewport-item-temp") {
        elements[i].style.backgroundColor = "";
      }
    }
  }

  function createCzmlData() {
    let temp = [];
    let line;
    let allViewports = document.querySelectorAll(".viewport-item");
    let czmlData = [
      {
        id: "document",
        name: "Viewports",
        version: "1.0",
      }
    ];
    if(allViewports.length > 1) {
      allViewports.forEach(function(viewport, ind) {
        if (viewport.getAttribute("id") != "viewport-item-temp") {
          let vpColor = viewport.querySelector(".color").value || "#ffffff";
          let vpDistance = viewport.querySelector(".layer-viewport").getAttribute("data-distance");
          let vpHeading = viewport.querySelector(".vp-heading").value || 1 ;
          let vpHeight = viewport.querySelector(".vp-height").value || 1 ;
          let vpPitch = viewport.querySelector(".vp-pitch").value || 1 ;
          let vpPosition = viewport.querySelector(".layer-viewport").getAttribute("data-position");
          let vpModelUrl = viewport.querySelector(".layer-viewport").getAttribute("data-modelUrl");
          let vpId = viewport.querySelector(".layer-viewport").getAttribute("data-layer-id");
          let layerPosition = vpPosition.split(",");
          let vpTransparent = viewport.querySelector(".transparent-range").value || 1;

          //Add 90 to set North as default
          vpHeadingNorth=Number(vpHeading)+90;
          let vpHeadingRadians = cesium.Math.toRadians(vpHeadingNorth);
          let vpPitchRadians = cesium.Math.toRadians(-(Number(vpPitch)));
          let hpr = new cesium.HeadingPitchRoll(vpHeadingRadians, vpPitchRadians, 0);
          let billboardPosition = layerPosition;
          billboardPosition[2] = vpHeight;
          let billboardPositionCartesian = cesium.Cartesian3.fromDegrees(billboardPosition[0], billboardPosition[1], billboardPosition[2]);
          billboardPositionCartesian = Object.values(billboardPositionCartesian);
          let layerPositionCartesian = cesium.Cartesian3.fromDegrees(layerPosition[0], layerPosition[1], layerPosition[2]);
          let orientation = cesium.Transforms.headingPitchRollQuaternion(layerPositionCartesian, hpr);
      
          let vpIndex = viewport.getAttribute("data-index");
          let modelLayerId = viewport.querySelector(".layer-viewport").getAttribute("data-layer-id");
          // Add each marker data into czml
          czmlData.push(
            {
              id: vpId,
              name: "Viewport" + " " + ind + 1,
              position: {
                cartographicDegrees: layerPosition,
              },
              orientation: {
                unitQuaternion: [ orientation.x, orientation.y, orientation.z, orientation.w ]
              },
              model: {
                uri: "https://eukarya-inc.github.io/reearth-plugin-viewport/src/viewport.glb",
                gltf: "https://eukarya-inc.github.io/reearth-plugin-viewport/src/viewport.glb",
                scale: vpDistance,
                maximumScale: 20000,
                color:  { "rgba" : convertHex(vpColor,(Number(vpTransparent) * 255 / 100)) },
                colorBlendMode: "REPLACE",
                colorBlendAmount: 0.5,
                heightReference: "RELATIVE_TO_GROUND",
              },
            }
          );

          czmlData.push(
            {
              id: "Icon" + vpId,
              name: "ViewportIcon" + " " + vpId,
              billboard: {
                image: "https://eukarya-inc.github.io/reearth-plugin-viewport/src/viewport-icon.png",
                heightReference: "RELATIVE_TO_GROUND",
              },
              orientation: {
                unitQuaternion: [ orientation.x, orientation.y, orientation.z, orientation.w ]
              },
              position: {
                cartesian: billboardPositionCartesian,
              },
            }
          );
        }
      });
      return czmlData;
    } else {
      return false;
    }
  }

  let expanded = false;
  let resizeElms = document.querySelectorAll(".resize");  
  let closeElm = document.getElementById("title");
  closeElm.addEventListener("click", handleCloseOpenPopup);
  let wapperElm = document.getElementById("wrapper");
  let heightWp = wapperElm.offsetHeight = 300;
  let newWrapperHeight = 0;
  function handleCloseOpenPopup(e) {
      if (e.target.id == "title" || e.target.classList.contains("title-p") ||
      (document.getElementById(e.target.id) !== null && document.getElementById(e.target.id).parentNode.id == "title")) {
        parent.postMessage({ type: "resize", expanded, heightWp }, "*");
          if(wapperElm !== null) {
            wapperElm.classList.remove("height-46");
          }
        if (expanded){
          document.documentElement.classList.add("extendedh", "extendedv");
        } else {
          document.documentElement.classList.remove("extendedh", "extendedv");
        }
        expanded = !expanded
      } else {
        if(e.target.tagName === "path" || e.target.tagName === "svg" || e.target.tagName === "g") {
          if(e.target.closest("#title")) {
            parent.postMessage({ type: "resize", expanded, heightWp }, "*");
            if( wapperElm !== null) {
              wapperElm.classList.remove("height-46");
            }
            if (expanded){
              document.documentElement.classList.add("extendedh", "extendedv");
            } else {
              document.documentElement.classList.remove("extendedh", "extendedv");
            }
            expanded = !expanded
          }
        }
      }
    }
  
// Hanlde color picker transparent value
  function showTranparentColorValue(elem) {
    let slideCol = elem;
    let viewportItem = slideCol.closest(".viewport-item");
    let transparentedColor = viewportItem.querySelector(".transparented-color");
    let vpColor = viewportItem.querySelector(".color").value || "#ffffff";
    let newColor = 1;
    slideCol.oninput = function() {
        vpColor = viewportItem.querySelector(".color").value || "#ffffff";
        let transparentedColor = viewportItem.querySelector(".transparented-color");
        let rgba = convertHex(vpColor,this.value / 100);
        let alpha = rgba.pop();
        let color = "(" + rgba.toString() + ")";
        color = color.replace(')', ',' + this.value / 100 + ')');   
        let newA = this.value / 100;
        if(transparentedColor.style.background.includes("rgba")) {
          let newColor = transparentedColor.style = "background: rgba(" + convertHex(vpColor,this.value / 100).join(",") + ")";
          transparentedColor.style.background = newColor;
        } else {
          let newColor = transparentedColor.style = "background: rgba(" + convertHex(vpColor,this.value / 100).join(",") + ")";
          transparentedColor.style.background = newColor;
        }
        createViewport(viewportItem, false, false, cesium);
    }
  }


</script>
`,{ width: 46, height: 46});

reearth.on("update", send);
send();

function send() {
  reearth.ui.postMessage({
    property: reearth.widget.property,
  });
}

let modelLayerId;
reearth.on('click', (mousedata) => {
  reearth.ui.postMessage({
    type: "mousedata",
    payload: mousedata,
    widget: reearth.widget
  }, "*");
});

reearth.on("message", (msg) => {
  if (msg.type === "resize") {
    reearth.ui.resize?.(
      msg.expanded ? 46 : 312,
      msg.expanded ? 46 : msg.heightWp,
      msg.expanded ? undefined : false
    );
  }
  else if (msg.type == "removeModel") {
    reearth.layers.hide(msg.removeViewportLayerId, {
      default: {
        url: [],
      },
    });
  }
  else if (msg.type === "showModel") {
    if (msg.modelLayerId) {
      // refresh
      let id = msg.modelLayerId;
      reearth.layers.overrideProperty(msg.modelLayerId, {
        default: {
          url: msg.czmlData,
        },
      });
      reearth.layers.show(msg.modelLayerId);
    } else {
      modelLayerId = reearth.layers.add({
        extensionId: "resource",
        isVisible: true,
        title: `CZML`,
        property: {
          default: {
            url: msg.czmlData,
            type: "czml",
          },
        },
      });
    }

    reearth.ui.postMessage({
      createdLayerId: modelLayerId,
      type: msg.type,
    });
  }
});