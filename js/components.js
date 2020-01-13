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
                <div id="infor-user-basic">
                    <div class="infor-wrapper">
                        <span>Họ và tên: </span>
                        <span id="fullName"></span>
                    </div>
                    <div class="infor-wrapper">
                        <span>Giới tính: </span>
                        <span id="gender"></span>
                    </div>
                    <div class="infor-wrapper">
                        <span>Ngày sinh: </span>
                        <span id="dateOfBirth"></span>
                    </div>
                    <div class="infor-wrapper">
                        <span>Số điện thoại: </span>
                        <span id="mobileNumber"></span>
                    </div>
                    <div class="infor-wrapper">
                        <span>email: </span>
                        <span id="email"></span>
                    </div>
                    <div class="infor-wrapper">
                        <span>Thành Phố: </span>
                        <span id="city"></span>
                    </div>
                </div>

                <button onclick="controller.logOut()">Log Out</button>
                <div id="control-container">
                    
                </div>
            </div>`
components.postJob = `
<div class="modal fade" id="add-job-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form id="form-post-job">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Đăng bài</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                    <div class="input-wrapper">
                        <span>Tên công việc:</span>
                        <input name="jobTitle" placeholder="Tên công việc">
                    </div>
                    <div class="input-wrapper">
                        <span>Địa chỉ:</span>
                        <input name="address" placeholder="Địa chỉ">
                    </div>
                    <div class="input-wrapper">
                        <span>Thời gian:</span>
                        <input name="time" placeholder="Thời gian">
                    </div>
                    <div class="input-wrapper">
                        <span>Mô tả công việc:</span>
                        <input name="description" placeholder="Mô tả công việc">
                    </div>
                    <div class="input-wrapper">
                        <span>Lương:</span>
                        <input name="salary" placeholder="">
                    </div>

                        
                    </div>
                    <div class="message" id="post-noti"></div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Submit</button>

                    </div>
                </form>
            </div>
        </div>
    </div>
`

components.listEmployee = `
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
                    <button id="post-job">Post</button>
                </div>
                <div id="employees-list-container">
                    
                </div>
                </div>
`

components.postedJob = `
                <div id="posted-jobs-header">
                    Posted Jobs:
                </div>
                <div id="posted-jobs-list-container">
                    
                </div>
            </div>
`
components.employer = `
    <div id="control-bar-main-content-container">

            ${components.controlBar}
            <div id="main-wrapper">
                <div id="menu-btn"></div>
                <div id="main-content">
                ${components.listEmployee}
                ${components.postJob}
                </div>
            </div>

        </div>  
`



components.listJobs = `
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
                    
                </div>

`
components.employeeProfile = `
<div id="profile-container">
                    <div id="personal-info">
                        <div id="personal-left">
                            <div class="profile-wrapper">
                                <span>Họ và tên :</span>
                                <div class="profile-line" id="fullName">Nguyễn Văn A</div>
                            </div>
                            <div class="profile-wrapper">
                                <span>Ngày sinh :</span>
                                <div class="profile-line" id="dateOfBirth">01/01/1999</div>
                            </div>
                            <div class="profile-wrapper">
                                <span>Số điện thoại :</span>
                                <div class="profile-line" id="mobileNumber">0336275142</div>
                            </div>
                            <div class="profile-wrapper">
                                <span>Tags công việc :</span>
                                <div class="profile-line" id="jobTags"></div>
                            </div>
                        </div>

                        <div id="personal-right">
                            <div class="profile-wrapper">
                                <span>Giới tính :</span>
                                <div class="profile-line" id="gender">Nam</div>
                            </div>
                            <div class="profile-wrapper">
                                <span>Email :</span>
                                <div class="profile-line" id="email">nguyenvana@gmail.com</div>
                            </div>
                            <div class="profile-wrapper">
                                <span>Thành phố :</span>
                                <div class="profile-line" id="city">Hà Nội</div>
                            </div>
                            <div class="profile-wrapper">
                                <span>Quận/Huyện :</span>
                                <div class="profile-line" id="district">Thanh Xuân</div>
                            </div>
                        </div>
                    </div>

                    <div id="description">
                        <span>Mô tả bản thân</span>
                        <div id="self-description">
                            Đẹp trai giống bố
                        </div>
                    </div>
                    <button>Edit</button>
                </div>
`
components.application = `
<div id="applied-jobs-header">
                    Applied Jobs:
                </div>
                <div id="applied-jobs-list-container">
                    
                    
                </div>
            
`
components.jobSeeker = `
    <div id="control-bar-main-content-container">

            ${components.controlBar}
            <div id="main-wrapper">
                <div id="menu-btn"></div>
                <div id="main-content">
                ${components.listJobs}

                </div>
            </div>
        
        </div>  `


