import React from 'react'
import './Home.css'
function Home() {
  return (
    <div className='app'>
      <div className='header neonText'><h1>Home</h1></div>
      <div className='cards-container'>
        <div className='level-cards-row'>
          <div className='level-cards'>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.0"  viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#ccc" stroke="none">
            <path d="M2609 5092 c-71 -37 -107 -88 -120 -174 -12 -77 -7 -1000 6 -1036 7 -22 6 -23 -21 -15 -16 4 -263 8 -549 8 l-520 0 -45 -27 c-45 -26 -46 -26 -70 -7 -49 37 -106 40 -625 37 -494 -3 -500 -3 -542 -25 -51 -27 -96 -82 -112 -132 -6 -21 -11 -95 -11 -165 l0 -126 75 0 75 0 0 124 c0 107 3 127 19 147 l19 24 501 3 501 3 25 -25 25 -25 0 -496 c0 -305 -4 -503 -10 -515 -5 -10 -24 -23 -41 -29 -41 -14 -929 -15 -978 -1 -61 17 -60 16 -61 343 l0 297 -75 0 -75 0 0 -309 0 -309 28 -53 c35 -67 88 -105 165 -120 36 -6 231 -9 540 -7 l483 3 52 27 52 27 47 -27 48 -27 510 0 c281 0 524 3 542 7 32 7 32 7 25 -25 -4 -18 -7 -261 -7 -542 l0 -510 26 -47 27 -46 -27 -54 -26 -53 -3 -473 c-2 -293 1 -499 7 -540 13 -86 49 -137 120 -174 51 -27 59 -28 202 -28 l149 0 0 75 0 75 -138 0 c-125 0 -140 2 -160 20 l-22 21 0 504 c0 492 1 506 20 525 19 19 33 20 520 20 l501 0 25 -25 25 -25 -3 -501 -3 -501 -24 -19 c-20 -17 -40 -19 -157 -19 l-134 0 0 -75 0 -75 143 0 c121 0 149 3 187 21 56 25 86 53 113 104 22 39 22 50 25 540 3 519 0 576 -37 625 -19 24 -19 25 7 70 l27 45 0 520 c0 286 -4 533 -8 549 -8 27 -7 28 15 20 36 -12 978 -17 1045 -5 77 15 130 53 165 120 l28 53 0 510 c0 354 -4 522 -11 549 -16 50 -61 105 -112 132 -42 22 -44 22 -562 22 -286 0 -532 -3 -548 -8 -26 -7 -27 -6 -20 20 5 16 8 262 8 548 0 518 0 520 -22 562 -27 51 -82 96 -132 112 -27 7 -195 11 -549 11 l-510 0 -53 -28z m1092 -141 l24 -19 3 -501 3 -501 -25 -25 -25 -25 -501 0 c-487 0 -501 1 -520 20 -19 19 -20 33 -20 525 l0 504 22 21 c21 20 32 20 519 20 474 0 498 -1 520 -19z m-1247 -1242 l26 -20 0 -508 c0 -504 0 -508 -21 -527 -20 -18 -43 -19 -521 -19 l-500 0 -24 28 -24 28 0 484 c0 506 1 523 44 543 13 7 194 11 507 11 477 1 487 1 513 -20z m1229 10 c14 -6 30 -22 36 -36 8 -16 11 -175 11 -508 l0 -484 -24 -28 -24 -28 -500 0 c-478 0 -501 1 -521 19 -21 19 -21 23 -21 527 l0 508 26 20 c26 21 36 21 510 21 333 0 491 -3 507 -11z m1268 -18 c18 -22 19 -46 19 -520 -1 -544 2 -523 -61 -541 -49 -14 -937 -13 -978 1 -17 6 -36 19 -41 29 -6 12 -10 210 -10 515 l0 496 25 25 25 25 501 -3 501 -3 19 -24z m-1242 -1247 c21 -26 21 -36 21 -510 0 -333 -3 -491 -11 -507 -6 -14 -22 -30 -36 -36 -16 -8 -174 -11 -507 -11 -474 0 -484 0 -510 21 l-26 20 0 506 c0 457 2 508 17 525 15 17 45 18 524 18 l508 0 20 -26z"/>
            <path d="M3430 4745 l0 -75 75 0 75 0 0 75 0 75 -75 0 -75 0 0 -75z"/>
            <path d="M3430 4445 l0 -75 75 0 75 0 0 75 0 75 -75 0 -75 0 0 -75z"/>
            <path d="M1832 3492 c-142 -51 -232 -191 -219 -338 11 -119 76 -213 184 -266 58 -28 77 -33 143 -33 92 1 166 31 230 95 64 64 94 138 95 230 0 66 -5 85 -33 143 -56 112 -150 175 -276 183 -53 4 -84 0 -124 -14z m186 -153 c112 -55 132 -204 37 -287 -91 -81 -222 -56 -274 50 -25 52 -27 95 -6 145 21 50 42 72 90 94 53 24 99 24 153 -2z"/>
            <path d="M2970 3180 l0 -330 75 0 74 0 3 108 3 107 85 -117 c47 -65 89 -118 93 -118 17 0 116 76 112 86 -2 6 -34 53 -70 103 l-67 92 41 38 c49 45 71 94 71 156 0 62 -19 103 -68 147 -53 48 -93 58 -234 58 l-118 0 0 -330z m248 164 c12 -8 22 -26 22 -39 0 -36 -26 -55 -76 -55 l-44 0 0 55 0 55 38 0 c21 0 48 -7 60 -16z"/>
            <path d="M4180 3179 l0 -321 143 4 c165 4 197 15 265 93 54 61 76 129 76 230 0 142 -55 243 -158 291 -46 21 -65 24 -188 24 l-138 0 0 -321z m289 143 c55 -55 64 -184 18 -254 -28 -41 -60 -58 -114 -58 l-43 0 0 170 0 170 56 0 c47 0 60 -4 83 -28z"/>
            <path d="M455 3515 c-5 -2 -35 -9 -66 -15 l-56 -11 58 -292 c32 -161 61 -302 64 -314 5 -21 11 -23 75 -23 l69 0 20 68 c11 37 32 110 47 162 14 52 27 96 29 98 1 1 24 -72 50 -163 l49 -166 70 3 70 3 56 280 c31 154 59 294 63 312 l6 32 -57 11 c-31 6 -64 13 -73 16 -14 4 -21 -19 -44 -138 -15 -79 -31 -146 -35 -151 -3 -4 -24 56 -46 133 l-39 141 -69 -3 -69 -3 -42 -145 -42 -145 -11 55 c-6 30 -18 93 -27 140 -24 127 -23 124 -50 115z"/>
            <path d="M3110 75 l0 -75 75 0 75 0 0 75 0 75 -75 0 -75 0 0 -75z"/>
            </g>
          </svg>          
          </div>
          <div className='level-cards'>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" class="svg-inline--fa fa-magnifying-glass fa-3x icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
          </div>
          <div className='level-cards'>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" class="svg-inline--fa fa-magnifying-glass fa-3x icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
          </div>
        </div>
        <div className='level-cards-row'>
          <div className='level-cards'>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" class="svg-inline--fa fa-magnifying-glass fa-3x icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
          </div>
          <div className='level-cards'>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" class="svg-inline--fa fa-magnifying-glass fa-3x icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
          </div>
        </div>
      </div>
      <div className='footer'>&copy; BIN 2024</div>
    </div>
  )
}

export default Home