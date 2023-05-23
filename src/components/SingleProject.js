/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";


function SingleProject ({ name, description, image, deployPage, deployPageLink, githubRepo, githubRepoLink }) {
    return (
<div style={{ display: 'inline-block'}} className="card w-96 bg-base-100 shadow-xl ">
  <figure><img src={image} alt="" /></figure>
  <div className="card-body bg-neutral-300">
    <h2 className="card-title underline-offset-1">
      {name}
    </h2>
    <h4> {description} </h4>
    <div className="card-actions justify-end">
      <a href={deployPageLink}><div className="badge badge-outline bg-neutral-focus">{deployPage}</div></a>
      <a href={githubRepoLink}><div className="badge badge-outline bg-neutral-focus">{githubRepo}</div></a>
    </div>
  </div>
</div>
    )
}

export default SingleProject;