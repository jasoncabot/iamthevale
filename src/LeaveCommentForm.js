
import React, { useRef } from 'react';

import $ from 'jquery';

const LeaveCommentForm = () => {
    const titleElement = useRef(null);

    const onSubmit = async (e) => {
        e.preventDefault();
        await fetch(`${process.env.REACT_APP_API}/stories`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: titleElement.current.value
            })
        }).then(response => response.json());
        $('#captureStory').modal('hide');
        titleElement.current.value = '';
    }

    return (
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
                <form onSubmit={onSubmit}>
                    <div className="modal-header text-center">
                        <h4 className="modal-title w-100 font-weight-bold">Tell your story</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body mx-3 text-left">
                        <label className="" data-error="wrong" data-success="right" htmlFor="comment-form-title">I am ...</label>
                        <div className="input-group-lg mb-1">
                            <input ref={titleElement} type="text" id="comment-form-title" className="form-control validate" placeholder="a person" maxLength="100" />
                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-right">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LeaveCommentForm;