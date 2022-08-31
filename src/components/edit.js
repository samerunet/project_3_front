<div className='updateForm'>
<form
    className='form-control'
    onSubmit={(event) => {
        handleUpdate(post);
    }}
>
    username:{""}
    <input
        className='form-control'
        placeholder={post.username}
        type='text'
        onChange={handleNewUser}
    />
    <br />
    image:{""}
    <input
        className='form-control'
        placeholder={post.image}
        type='text'
        onChange={handlesetImage}
    />
    <br />
    video:{""}
    <input
        className='form-control'
        placeholder={post.video}
        type='text'
        onChange={handlesetVideo}
    />
    <br />
    comment:{""}
    <input
        className='form-control'
        placeholder={post.comment}
        type='text'
        onChange={handlesetComment}
    />
    <br />
    likes:{""}
    <input
        className='form-control'
        type='number'
        placeholder={post.likes}
        onChange={handlesetLikes}
    />
    <br />
    caption:{""}
    <input
        className='form-control'
        placeholder={post.caption}
        type='text'
        onChange={handlesetCaptions}
    />
    <br />
    <input type='submit' value='edit button' />
</form>
</div>