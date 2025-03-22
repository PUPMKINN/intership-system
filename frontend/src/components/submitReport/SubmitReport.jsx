import React from "react";
import "./submitReport.css";

const SubmitReport = () => {
    return (
        <div className="submit-report">
            <h1>UC Nộp báo cáo</h1>
            <div className="report-container shadow">
                <div className="report-header">
                    <div>
                        <p>Thời hạn nộp</p>
                        <h3>15 ngày</h3>
                    </div>
                    <div>
                        <p>Thời gian nộp</p>
                        <h3>-</h3>
                    </div>
                    <div>
                        <p>Tình trạng</p>
                        <h3 className="status pending">Chưa nộp</h3>
                    </div>
                    <div>
                        <p>Chưa chấm</p>
                        <h3>17-12-2023</h3>
                    </div>
                </div>

                <div className="upload-section">
                    <div className="upload-box">
                        <i className="fa fa-upload upload-icon"></i>
                        <p>Chưa có báo cáo nào được tải lên</p>
                        <p className="upload-instruction">Upload PDF, DOC, or DOCX files (≤5MB)</p>
                        <button className="upload-btn">Tệp</button>
                    </div>
                </div>

                <div className="rules-section">
                    <h3>Quy định nộp báo cáo</h3>
                    <ul>
                        <li>✔ Chấp nhận các định dạng file: PDF, DOC, DOCX</li>
                        <li>✔ Kích thước file tối đa: 5MB</li>
                        <li>✔ Thời hạn nộp: trong vòng 15 ngày kể từ ngày được giao</li>
                        <li>✔ Báo cáo phải đầy đủ nội dung theo yêu cầu và đúng format quy định</li>
                    </ul>
                </div>

                <div className="history-section">
                    <h3>Lịch sử nộp báo cáo</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Thời gian</th>
                                <th>Tên file</th>
                                <th>Trạng thái</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>15-12-2023 14:30</td>
                                <td>report_v1.pdf</td>
                                <td className="status failed">Thất bại</td>
                            </tr>
                            <tr>
                                <td>16-12-2023 09:15</td>
                                <td>report_v2.pdf</td>
                                <td className="status success">Thành công</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SubmitReport;