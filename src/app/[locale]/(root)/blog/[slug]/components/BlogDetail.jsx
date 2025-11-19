"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Calendar,
  Clock,
  MessageSquare,
  Heart,
  Eye,
  Share2,
  Bookmark,
  ArrowLeft,
  Tag,
  ChevronRight,
  Mail,
  Send,
  ThumbsUp,
  Reply,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { getDataFake } from "@/app/api/getDataFake";
import { blogPostsDetailsOptions } from "@/data/queryOptionsData";

export default function BlogDetail({ slug }) {
  const {
    data: post,
    isLoading,
    error,
  } = useSuspenseQuery(blogPostsDetailsOptions(slug));
  // console.log("slug: ", slug);
  //   console.log("blogPostsData: ", blogPostsData);
  // const params = 1;
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(342);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [userComment, setUserComment] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [showReplyForm, setShowReplyForm] = useState(null);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (userComment.name && userComment.email && userComment.comment) {
      // In a real app, this would send the comment to the server
      console.log("Comment submitted:", userComment);
      setUserComment({ name: "", email: "", comment: "" });
      setCommentText("");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserComment((prev) => ({ ...prev, [name]: value }));
  };

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num;
  };

  const toggleReplyForm = (commentId) => {
    setShowReplyForm(showReplyForm === commentId ? null : commentId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/blog">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button
                variant={isBookmarked ? "default" : "outline"}
                size="sm"
                onClick={handleBookmark}
              >
                <Bookmark
                  className={`h-4 w-4 mr-2 ${
                    isBookmarked ? "fill-current" : ""
                  }`}
                />
                {isBookmarked ? "Saved" : "Save"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Article Header */}
            <div className="mb-8">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200 text-sm">
                {post?.data?.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {post?.data?.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={post?.data?.author.avatar} />
                    <AvatarFallback>
                      {post?.data?.author.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <span className="font-medium block">
                      {post?.data?.author.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {post?.data?.author.role}
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>{post?.data?.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{post?.data?.readTime}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <Eye className="mr-1 h-4 w-4" />
                  <span>{formatNumber(post?.data?.views)} views</span>
                </div>
                <div className="flex items-center">
                  <Heart className="mr-1 h-4 w-4" />
                  <span>{formatNumber(post?.data?.likes)} likes</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="mr-1 h-4 w-4" />
                  <span>{post?.data?.commentCount} comments</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 w-full mb-8 rounded-xl overflow-hidden shadow-md">
              <Image
                src={post?.data?.image}
                alt={post?.data?.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Article Content */}
            <article
              className="prose prose-lg max-w-none mb-12 prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-blockquote:border-blue-600 prose-blockquote:bg-blue-50 prose-blockquote:px-6 prose-blockquote:py-3 prose-blockquote:rounded-lg"
              dangerouslySetInnerHTML={{ __html: post?.data?.content }}
            />

            {/* Tags */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Tag className="mr-2 h-5 w-5" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {post?.data?.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="px-3 py-1 cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 mb-12 p-4 bg-white rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mr-4">Was this helpful?</h3>
              <Button
                variant={isLiked ? "default" : "outline"}
                size="sm"
                onClick={handleLike}
                className="flex items-center gap-1"
              >
                <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
                {isLiked ? "Liked" : "Like"} ({formatNumber(post?.data?.likes)})
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
              >
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>

            {/* Author Bio */}
            <Card className="mb-12">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">About the Author</h3>
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={post?.data?.author.avatar} />
                    <AvatarFallback>
                      {post?.data?.author.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-lg">
                      {post?.data?.author.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {post?.data?.author.role}
                    </p>
                    <p className="text-gray-700">{post?.data?.author.bio}</p>
                    <Button variant="outline" className="mt-4">
                      View All Articles
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comments Section */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-12">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                Comments ({post?.data?.commentCount})
              </h3>

              {/* Comment Form */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Leave a Comment</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleCommentSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={userComment.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email"
                          value={userComment.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <Label htmlFor="comment">Comment</Label>
                      <Textarea
                        id="comment"
                        name="comment"
                        placeholder="Write your comment here..."
                        rows={4}
                        value={userComment.comment}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <Button type="submit">
                      <Send className="mr-2 h-4 w-4" />
                      Post Comment
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Comments List */}
              <div className="space-y-6">
                {post?.data?.commentList.map((comment) => (
                  <div
                    key={comment.id}
                    className="border-b pb-6 last:border-b-0"
                  >
                    <div className="flex items-start gap-3">
                      <Avatar className="h-10 w-10 flex-shrink-0">
                        <AvatarImage src={comment.user.avatar} />
                        <AvatarFallback>
                          {comment.user.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-semibold">{comment.user.name}</h4>
                          <span className="text-sm text-gray-500">
                            {comment.date}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-3">{comment.text}</p>
                        <div className="flex items-center gap-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-500 h-8 px-2"
                          >
                            <ThumbsUp className="mr-1 h-4 w-4" />
                            <span>{comment.likes}</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-500 h-8 px-2"
                            onClick={() => toggleReplyForm(comment.id)}
                          >
                            <Reply className="mr-1 h-4 w-4" />
                            Reply
                          </Button>
                        </div>

                        {/* Reply Form */}
                        {showReplyForm === comment.id && (
                          <div className="mt-4 pl-4 border-l-2 border-gray-200">
                            <div className="flex gap-3 mt-3">
                              <Avatar className="h-8 w-8 flex-shrink-0">
                                <AvatarFallback>Y</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <Textarea
                                  placeholder="Write your reply..."
                                  rows={2}
                                  className="mb-2"
                                />
                                <div className="flex justify-end gap-2">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setShowReplyForm(null)}
                                  >
                                    Cancel
                                  </Button>
                                  <Button size="sm">
                                    <Send className="mr-1 h-4 w-4" />
                                    Reply
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Replies */}
                        {comment.replies && comment.replies.length > 0 && (
                          <div className="mt-4 pl-4 border-l-2 border-gray-200">
                            {comment.replies.map((reply) => (
                              <div
                                key={reply.id}
                                className="flex items-start gap-3 mt-4"
                              >
                                <Avatar className="h-8 w-8 flex-shrink-0">
                                  <AvatarImage src={reply.user.avatar} />
                                  <AvatarFallback>
                                    {reply.user.name.charAt(0)}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <div className="flex justify-between items-start mb-1">
                                    <h4 className="font-semibold text-sm">
                                      {reply.user.name}
                                    </h4>
                                    <span className="text-xs text-gray-500">
                                      {reply.date}
                                    </span>
                                  </div>
                                  <p className="text-gray-700 text-sm">
                                    {reply.text}
                                  </p>
                                  <div className="flex items-center gap-4 mt-2">
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="text-gray-500 h-7 px-2"
                                    >
                                      <ThumbsUp className="mr-1 h-3 w-3" />
                                      <span className="text-xs">
                                        {reply.likes}
                                      </span>
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Posts */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {post?.data?.relatedPosts.map((relatedPost, indx) => (
                  <Card
                    key={indx}
                    className="overflow-hidden group hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative h-48">
                      <Image
                        src={relatedPost?.data?.image}
                        alt={relatedPost?.data?.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        <Link
                          href={`/blog/${relatedPost?.data?.slug}`}
                          className="hover:underline"
                        >
                          {relatedPost?.data?.title}
                        </Link>
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        {relatedPost?.data?.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="mr-1 h-4 w-4" />
                        <span className="mr-2">{relatedPost?.data?.date}</span>
                        <span className="mx-2">•</span>
                        <Clock className="mr-1 h-4 w-4" />
                        <span className="mr-2">
                          {relatedPost?.data?.readTime}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Newsletter Subscription */}
            <Card className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Mail className="h-10 w-10 text-blue-600 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold mb-2">
                    Subscribe to Our Newsletter
                  </h3>
                  <p className="text-sm text-gray-600">
                    Get the latest articles and special offers directly to your
                    inbox
                  </p>
                </div>
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="focus:ring-blue-500"
                  />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Subscribe Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Popular Products */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Popular Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {post?.data?.relatedProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center gap-3 group cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm truncate group-hover:text-blue-600 transition-colors duration-300">
                          {product.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`h-3 w-3 ${
                                  i < Math.floor(product.rating)
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              >
                                ★
                              </div>
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">
                            ({product.reviews})
                          </span>
                        </div>
                        <p className="text-blue-600 font-semibold text-sm">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Products
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    { name: "Electronics", count: 12 },
                    { name: "Smartphones & Devices", count: 8 },
                    { name: "Home Appliances", count: 5 },
                    { name: "Gaming", count: 7 },
                    { name: "Accessories", count: 10 },
                  ].map((category, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 cursor-pointer hover:text-blue-600 transition-colors duration-200"
                    >
                      <span className="text-sm">{category.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tags Cloud */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Smartphones",
                    "Laptops",
                    "Headphones",
                    "Gaming",
                    "Deals",
                    "Offers",
                    "New",
                    "Tech",
                    "Cameras",
                    "Devices",
                  ].map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="cursor-pointer px-3 py-1 text-xs hover:bg-gray-100"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
