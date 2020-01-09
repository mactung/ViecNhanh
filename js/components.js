const components = {};

components.nav = `
    <div class="nav-bar">
        <div class="logo">

        </div>

        <div class="menu-select">
            <div class="select-btn active"><span>Tìm người</span></div>
            <div class="select-btn"><span>Bài đăng</span></div>
        </div>
        
            
        <div class="user-information">
            <div class="user-avatar"></div>
            <div class="user-name"></div>
        </div>
            
    </div>
`;



components.employerMain = `
    <div class="main">
        <div class="location-select">
            <select>
                <option value="1">Hà Nội</option>
                <option valua="2">Hồ Chí Minh</option>
            </select>
            <select>
                <option value="1">Hà Đông</option>
                <option valua="2">Hai Bà Trưng</option>
            </select>

        </div>
        <div class="input-search">
            <div class="input-wrapper">
                <input/>
                
            </div>
        </div>
        <div class="filter-wrapper">
            <select>
                <option value="1">Khoảng cách</option>
                <option valua="2">Hồ Chí Minh</option>
            </select>
            <select>
                <option value="1">Hà Đông</option>
                <option valua="2">Hai Bà Trưng</option>
            </select>
        </div>
        <div class="employee-list">
            <div class="employee-infor-board">

            </div>
        
        </div>
    </div>
        
`;

components.welcomePage = `
<div id="header" class="header">
            <div id="header-left">
                <span>ViecVat</span>
            </div>
            <div id="header-right">
                <a href="#">Đăng kí</a>
                <a href="#">Đăng nhập</a>
            </div>
        </div>
        <div id="content">
            <div id="option-wrapper">
                <div id="employer-container">
                    <div id="employer-title">
                        <div class="sign-up-btn" id="employer-sign-up-btn">Bạn đang tìm người làm? <br> Tìm ngay !!!</div>
                    </div> 
                </div>
                <div id="job-seeker-container">
                    <div id="job-seeker-title">
                        <div class="sign-up-btn" id="job-seeker-sign-up-btn">Bạn đang tìm việc? <br> Đăng kí ngay !!!</div>
                    </div>
                    
                </div>

            </div>
            
            <div id="already-have-account">
                <button id="already-have-account-btn">Already have an account? Sign in</button>
            </div>   
        </div>
        <div id="footer">
            <span>About Us</span>
        </div>
`
