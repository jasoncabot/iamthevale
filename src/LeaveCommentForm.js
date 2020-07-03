
import React, { useEffect, useState, useRef } from 'react';

const LeaveCommentForm = () => {
    return (
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header text-center">
                    <h4 className="modal-title w-100 font-weight-bold">Tell your story</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div className="modal-body mx-3">
                    <div className="md-form mb-5">
                        <i className="fas fa-envelope prefix grey-text"></i>
                        <label data-error="wrong" data-success="right" htmlFor="defaultForm-email">I am ...</label>
                        <input type="email" id="defaultForm-email" className="form-control validate" placeholder="a person" maxLength="40" />
                    </div>

                    <div className="md-form mb-4">
                        <i className="fas fa-lock prefix grey-text"></i>
                        <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass">I am ...</label>
                        <textarea type="password" id="defaultForm-pass" className="form-control validate" placeholder="writing something to describe myself to others" />
                    </div>

                </div>
                <div className="modal-footer d-flex justify-content-center">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default LeaveCommentForm;