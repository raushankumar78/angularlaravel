<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Validator;
class PostController extends Controller
{

    public function __construct() {
        $this->middleware('auth:api');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $post = Post::all();
        return response()->json([
            "success" => true,
            "message" => "Post List",
            "data" => $post
            ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

     public function search($post= null){
        $post = Post::where('tags','like',"%{$post}%")->get();
        return response()->json([
            "success" => true,
            "message" => "Post List",
            "data" => $post
            ]);
     }
    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'title' => 'required',
            'subtitle' => 'required',
            'tags' => 'required',
            'content' => 'required'
            ]);
            if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
            }
            $post = Post::create($input);
            return response()->json([
                "success" => true,
                "message" => "Post created successfully.",
                "data" => $post
            ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        if (is_null($post)) {
            return $this->sendError('Post not found.');
            }
            return response()->json([
            "success" => true,
            "message" => "Post retrieved successfully.",
            "data" => $post
            ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        if (is_null($post)) {
            return $this->sendError('Post not found.');
            }
            return response()->json([
            "success" => true,
            "message" => "Post retrieved successfully.",
            "data" => $post
            ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
            $input = $request->all();
            $validator = Validator::make($input, [
                'title' => 'required',
                'subtitle' => 'required',
                'tags' => 'required',
                'content' => 'required'
            ]);
            if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
            }
            $post->update($input);
            return response()->json([
            "success" => true,
            "message" => "Post updated successfully.",
            "data" => $post
            ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        $post->delete();
        return response()->json([
        "success" => true,
        "message" => "Post deleted successfully.",
        "data" => $post
        ]);
    }
}
