function addNewComment(data) {
    let commentList = document.getElementById('comment-list');
    let newComment = document.createElement('template');
    newComment.innerHtml = ``

    commentList.append(newComment.content);
    document.getElementById('message-${data.commentId}')
}
    document.getElementById('comment-button').addEventListener('click', function (ev) {
        let commentTextElement = document.getElementById('comment-text');
        let commentText = commentTextElement.value;
        let postId = ev.currentTarget.dataset.postid;

        if(!commentText) return; //prevent empty commments

        fetch("/comments/create", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                comment: commentText,
                postId: postId
            })
        })
            .then(response => response.json())
            .then(res_json => {
                console.log(res_json)
                addNewComment(res_json.data);
            })
    })
