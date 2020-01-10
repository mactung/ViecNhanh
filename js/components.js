const components = {};

components.nav = `
    <div class="nav-bar">
        <div class="logo">

        </div>
        <div class="user-information">
            <div class="user-avatar"></div>
            <div class="user-name"></div>
            <button onclick="controller.logOut()">Log Out</button>
        </div>
                
    </div>
`;

components.welcomePage = `
<div class="nav-bar">
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
components.employerRegister = `
    <section class="register-container">
                <form id="form-register" class="form-register">
                    <div class="form-header">
                        <h3>Sign up</h3>
                    </div>
                    <div class="form-content">
                        <div class="name-wrapper">
                            <div class="input-wrapper">
                                <input type="text" name="firstName" placeholder="First Name">
                                <div id="firstname-error" class="message-error"></div>
                            </div>
                            <div class="input-wrapper">
                                <input type="text" name="lastName" placeholder="Last Name">
                                <div id="lastname-error" class="message-error"></div>
                            </div>
                        </div>
                
                        <div class="input-wrapper">
                            <input type="email" name="email" placeholder="Email">
                            <div id="email-error" class="message-error"></div>
                        </div>
                
                        <div class="input-wrapper">
                            <input type="password" name="password" placeholder="Password">
                            <div id="password-error" class="message-error"></div>
                        </div>
                
                        <div class="input-wrapper">
                            <input type="password" name="confirmPassword" placeholder="Confirm Password">
                            <div id="confirm-password-error" class="message-error"></div>
                        </div>
                        <div id="register-error" class="message-error"></div>
                        <div id="register-success" class="message-success" style="color: #00ff00"></div>

                        <div class="input-wrapper">
                            <input type="tel" name="mobileNumber" id="mobile-number" placeholder="Mobile Number">
                        </div>
    
                        <div class="city-district-wrapper">
                            <div class="input-wrapper">
                                <span>Thành phố</span>
                                <select name="city" id="city">
                                    <option value="haNoi">Hà Nội</option>
                                    <option value="tpHCM">TP Hồ Chí Minh</option>
                                </select>
                            </div>
                            <div class="input-wrapper">
                                <span>Quận/Huyện</span>
                                <select name="district" id="district">
                                    <option value="">abc</option>
                                </select>
                            </div>
                        </div>
                        
                    </div>
                    <div class="form-footer">
                        <a id="register-link" href="#">Already have an account? Login</a>
                        <button id="register-submit-btn" type="submit">Register</button>
                    </div>
                </form>
                </section>
`
components.jobSeekerRegister = `
<section class="register-container">
            <form id="form-register" class="form-register">
                <div class="form-header">
                    <h3>Sign up</h3>
                </div>
                <div class="form-content">
                    <div class="name-wrapper">
                        <div class="input-wrapper">
                            <input type="text" name="firstName" placeholder="First Name">
                            <div id="firstname-error" class="message-error"></div>
                        </div>
                        <div class="input-wrapper">
                            <input type="text" name="lastName" placeholder="Last Name">
                            <div id="lastname-error" class="message-error"></div>
                        </div>
                    </div>
            
                    <div class="input-wrapper">
                        <input type="email" name="email" placeholder="Email">
                        <div id="email-error" class="message-error"></div>
                    </div>
            
                    <div class="input-wrapper">
                        <input type="password" name="password" placeholder="Password">
                        <div id="password-error" class="message-error"></div>
                    </div>
            
                    <div class="input-wrapper">
                        <input type="password" name="confirmPassword" placeholder="Confirm Password">
                        <div id="confirm-password-error" class="message-error"></div>
                    </div>
                    <div id="register-error" class="message-error"></div>

                    <div class="dob-gender-wrapper">
                        <div class="input-wrapper" id="dob-wrapper">
                            <span>Ngày sinh</span>
                            <input type="date" name="dateOfBirth" placeholder="Date of birth" class="dob-input">
                        </div>
                        <div class="input-wrapper">
                            <span>Giới tính</span>
                            <select name="gender" id="gender">
                                <option value="male">Nam</option>
                                <option value="female">Nữ</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="input-wrapper">
                        <input type="tel" name="mobileNumber" id="mobile-number" placeholder="Mobile Number">
                    </div>

                    <div class="city-district-wrapper">
                        <div class="input-wrapper">
                            <span>Thành phố</span>
                            <select name="city" id="city">
                                <option value="ha-noi">Hà Nội</option>
                                <option value="tphcm">TP Hồ Chí Minh</option>
                            </select>
                        </div>
                        <div class="input-wrapper">
                            <span>Quận/Huyện</span>
                            <select name="district" id="district">
                                <option value="">abc</option>
                            </select>
                        </div>
                    </div>
                    <div class="input-wrapper">
                        <span>Chọn 3 ngành nghề chính</span>
                        <div class="job-wrapper">
                            <select name="job1" id="job-1">
                                <option value="1">bốc vác</option>
                            </select>
                            <select name="job2" id="job-2">
                                <option value="1">bốc vác</option>
                            </select>
                            <select name="job3" id="job-3">
                                <option value="1">bốc vác</option>
                            </select>
                        </div>                        
                    </div>
                    
                </div>
                <div id="register-success" class="message-success" style="color: #00ff00"></div>

                <div class="form-footer">
                    <a id="register-link" href="#">Already have an account? Login</a>
                    <button id="register-submit-btn" type="submit">Register</button>
                </div>
            </form>
            </section>
            `

components.logIn = `
<section class="login-container">
            <form id="log-in-form" class="form-login">
                <div class="form-header">
                    <h3>Log in</h3>
                </div>
                <div class="form-content">
            
                    <div class="input-wrapper">
                        <input type="email" name="email" placeholder="Email">
                        <div id="email-error" class="message-error"></div>
                    </div>
                    <div class="input-wrapper">
                        <input type="password" name="password" placeholder="Password">
                        <div id="password-error" class="message-error"></div>
                    </div>
                    <div id="login-error" class="message-error"></div>
            
                </div>
                <div class="form-footer">
                    <a id="login-link" href="#">Haven't got an account yet? Sign up</a>
                    <button id="login-submit-btn" type="submit">Login</button>
                </div>
            </form>
            </section>
`

components.controlBar = `<div id="control-bar">
                <div id="avatar-container">
                    <img src="../ViecNhanh/DesManHinh/ava.png" alt="" id="avatar">
                </div>

                <div id="control-container">
                    
                </div>
            </div>`
components.mainContent = `
<div id="main-content">
                <div id="search-bar-filter-container">
                    <input type="text" name="search-bar" id="search-bar" placeholder="Search">
                    <div id="filter-container">
                        <span>Lọc</span>
                        <select name="filter" id="filter">
                            <option value="distance">Khoảng cách</option>
                            <option value="salary">Mức lương</option>
                        </select>
                    </div>
                    
                    <div id="tags-container">
                        <span>Tags</span>
                        <select name="jobs-tags" id="jobs-tags">
                            <option value="1">Bốc vác</option>
                            <option value="2">Dọn nhà</option>
                        </select>
                    </div>
                </div>
                <div id="jobs-list-container">
                    <div class="job-detail-container">

                    </div>
                    <div class="job-detail-container"></div>
                    <div class="job-detail-container"></div>
                    
                </div>
            </div>
`
components.employer = `${components.nav}
    <div id="control-bar-main-content-container">

            ${components.controlBar + components.mainContent}
        </div>  
`
components.jobSeeker = `${components.nav}
    <div id="control-bar-main-content-container">

            ${components.controlBar + components.mainContent}
        
        </div>  `
